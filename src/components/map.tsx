import React from "react"
import { Map as LeafletMap, TileLayer, Marker, Tooltip } from "react-leaflet"
import { Link, graphql, useStaticQuery } from "gatsby"

const MapContainer = props => {
  // Fix because react-leaflet isn't true React.
  return <div className="map-container">
    {typeof window === "undefined" && <div className="loading">Map loading...</div>}
    {typeof window !== "undefined" && <Map {...props} />}
  </div>
}

const Map = props => {
  const zoom = 12
  // const bigBenPosition = [51.5007, -0.1246]
  // const canadaWaterLibraryPosition = [51.4977, -0.04918]

  const { featured } = props

  type Location = [number, number]

  type Place = {
    location: Location,
    url: String,
    title: String
  }

  interface Props {
    featured: Place,
    places: [Place],
    zoom?: bigint,
  }

  const data = useStaticQuery(graphql`
    query GET_PLACES {
      wpgraphql {
        pages(first: 100, where: { orderby: { field: DATE, order: ASC } }) {
          nodes {
            id
            uri
            title
            location {
              latitude
              longitude
            }
          }
        }
      }
    }
  `)

  const {
    wpgraphql: {
      pages: { nodes },
    },
  } = data

  const places = nodes.filter(({location}) => (location?.latitude && location?.longitude));

  return (
    <LeafletMap className="map" {...props} center={{lat: featured?.location?.latitude, lng: featured?.location?.longitude}} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap Contributors. Tiles courtesy of Humanitarian 
        OpenStreetMap Team"
      />

      {places.map(place => {
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
              <Link to={`/${uri}`}>{title}</Link>
            </Tooltip>
            
          </Marker>
        )
      })}

      <Marker opacity={0.4} position={{lat: featured?.location?.latitude, lng: featured?.location?.longitude}}> 
        <Tooltip permanent direction="center">
          <Link to={`/${featured?.url}`}>{featured?.title}</Link>
        </Tooltip>
      </Marker>
    </LeafletMap>
  )
}

export default MapContainer
