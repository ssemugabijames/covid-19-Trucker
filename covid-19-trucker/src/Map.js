import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import './Map.css'
import { showDataOnMap } from './util';

function Map({countries, casesType, center, zoom }) {
    return (
        <div className="Map">
      <LeafletMap center={center} zoom={zoom}>
      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> 
            {/*function Loop through countries and drow circles on the screen  */}
            {showDataOnMap(countries, casesType)}
        </LeafletMap>
        </div>
    )
}
export default Map 