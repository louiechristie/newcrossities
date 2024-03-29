import React from "react"
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Tooltip,
} from "react-leaflet"
import { Link } from "gatsby"

type Location = { latitude: number; longitude: number }

type Place = {
  location: Location
  id: String
  uri: String
  title: String
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: {
          fields: {
            exif: {
              gps: { latitude; longitude }
            }
          }
        }
      }
    }
  }
}

interface Props {
  featured: Place
  places: [Place]
  zoom?: bigint
}

const MapContainer = (props: Props): JSX.Element => {
  // Fix because react-leaflet isn't true React.
  return (
    <div className="map-container">
      {typeof window !== "undefined" && <Map {...props} />}
    </div>
  )
}

const Map = (props: Props) => {
  const zoom = 12
  // const bigBenPosition = [51.5007, -0.1246]
  // const canadaWaterLibraryPosition = [51.4977, -0.04918]

  const { featured, places } = props

  const location = props.featured?.location

  // const placesWithLocation = places?.filter(
  //   ({ location }) => location?.latitude && location?.longitude
  // )

  const placesWithLocation = places?.reduce(
    (
      accumulator: Place[],
      currentValue: Place,
      currentIndex: number,
      array: Place[]
    ) => {
      const {
        featuredImage: {
          node: {
            localFile: {
              childImageSharp: {
                fields: {
                  exif: {
                    gps: { latitude, longitude },
                  },
                },
              },
            },
          },
        },
      } = currentValue

      let usedLatitude = currentValue.location?.latitude
      let usedLongitude = currentValue.location?.longitude

      if (!usedLatitude || !usedLongitude) {
        usedLatitude = latitude
        usedLongitude = longitude
      }
      return [
        ...accumulator,
        {
          ...currentValue,
          location: { latitude: usedLatitude, longitude: usedLongitude },
        },
      ]
    },
    []
  )

  // console.log('featured?.uri', featured?.uri);
  // console.log ('window?.location?.pathname', window?.location?.pathname);
  // console.log ('featured?.uri === window?.location?.pathname', featured?.uri === window?.location?.pathname);

  return (
    <div>
      <LeafletMap
        className="map"
        {...props}
        center={{
          lat: location?.latitude,
          lng: location?.longitude,
        }}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap Contributors. Tiles courtesy of Humanitarian 
        OpenStreetMap Team"
        />

        {placesWithLocation?.map((place) => {
          const {
            id,
            uri,
            title,
            location: { latitude, longitude },
          } = place

          // Transform to leaflet.js schema
          const position = {
            lat: latitude,
            lng: longitude,
          }

          if (!latitude || !longitude) {
            return null
          }

          return (
            <Marker key={id} opacity={0.4} position={position}>
              <Tooltip permanent direction="center">
                <Link to={uri}>{title}</Link>
              </Tooltip>
            </Marker>
          )
        })}

        <Marker
          opacity={0.4}
          position={{
            lat: location?.latitude,
            lng: location?.longitude,
          }}
        >
          <Tooltip permanent direction="center">
            {featured?.uri === window?.location?.pathname ? (
              <a
                href={`https://maps.google.com/?q=${location?.latitude},${location?.longitude}&ll=${location?.latitude},${location?.longitude}`}
              >
                {featured?.title}
              </a>
            ) : (
              <Link to={featured?.uri}>{featured?.title}</Link>
            )}
          </Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  )
}

export default MapContainer
