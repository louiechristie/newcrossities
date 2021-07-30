import React from "react"
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Tooltip,
} from "react-leaflet"
import { Link } from "gatsby"

const MapContainer = (props) => {
  // Fix because react-leaflet isn't true React.
  return (
    <div className="map-container">
      {typeof window !== "undefined" && <Map {...props} />}
    </div>
  )
}

const Map = (props) => {
  const zoom = 12
  // const bigBenPosition = [51.5007, -0.1246]
  // const canadaWaterLibraryPosition = [51.4977, -0.04918]

  const { featured, nodes } = props

  type Location = [number, number]

  type Place = {
    location: Location
    uri: String
    title: String
  }

  interface Props {
    featured: Place
    places: [Place]
    zoom?: bigint
  }

  const location = props.featured?.location;

  const places = nodes?.filter(
    ({ location }) => location?.latitude && location?.longitude
  )

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
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap Contributors. Tiles courtesy of Humanitarian 
        OpenStreetMap Team"
        />

        {places.map((place) => {
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
            <a
              href={`https://maps.google.com/?q=${location?.latitude},${location?.longitude}&ll=${location?.latitude},${location?.longitude}`}
            >
              {featured?.title}
            </a>
          </Tooltip>
        </Marker>
      </LeafletMap>
      
    </div>
  )
}

export default MapContainer
