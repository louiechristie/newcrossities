import React from "react"
import { Map as LeafletMap, TileLayer, Marker, Tooltip } from "react-leaflet"
import { Link } from "gatsby"

// /**
//  * From https://github.com/PaulLeCam/react-leaflet/issues/255#issuecomment-388492108
//  */
// import L from "leaflet"

// import "leaflet/dist/leaflet.css"

// // stupid hack so that leaflet's images work after going through webpack
// import marker from "leaflet/dist/images/marker-icon.png"
// import marker2x from "leaflet/dist/images/marker-icon-2x.png"
// import markerShadow from "leaflet/dist/images/marker-shadow.png"

// // delete L.Icon.Default.prototype._getIconUrl

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: marker2x,
//   iconUrl: marker,
//   shadowUrl: markerShadow,
// })
// /**
//  * End of from https://github.com/PaulLeCam/react-leaflet/issues/255#issuecomment-388492108
//  */

const Map = props => {
  const zoom = 12
  // const bigBenPosition = [51.5007, -0.1246]
  const canadaWaterLibraryPosition = [51.4977, -0.04918]

  const { places } = props

  return (
    <LeafletMap {...props} center={canadaWaterLibraryPosition} zoom={zoom}>
      <TileLayer
        url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap Contributors. Tiles courtesy of Humanitarian 
        OpenStreetMap Team"
      />

      {places.map(place => {
        const { position, url, title } = place
        return (
          <Marker opacity={0.5} position={position}>
            <Tooltip permanent direction="center">
              <Link to={url}>{title}</Link>
            </Tooltip>
          </Marker>
        )
      })}
    </LeafletMap>
  )
}

export default Map
