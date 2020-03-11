import React from "react"
import { Map as LeafletMap, TileLayer, Marker, Tooltip } from "react-leaflet"
import { Link } from "gatsby"

const MapContainer = props => {
  // Fix because react-leaflet isn't true React.
  return <div>{typeof window !== "undefined" && <Map {...props} />}</div>
}

const Map = props => {
  const zoom = 12
  // const bigBenPosition = [51.5007, -0.1246]
  const canadaWaterLibraryPosition = [51.4977, -0.04918]

  const { places } = props

  return (
    <LeafletMap {...props} center={canadaWaterLibraryPosition} zoom={zoom}>
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
            (
            <Tooltip permanent direction="center">
              <Link to={uri}>{title}</Link>
            </Tooltip>
            )
          </Marker>
        )
      })}
    </LeafletMap>
  )
}

export default MapContainer
