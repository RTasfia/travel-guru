import React from 'react';
import {Map,TileLayer,Marker} from 'react-leaflet';
import L from 'leaflet';

const GetIcon = (iconSize) => {
  return L.icon (
    {
      iconUrl: require('../../Icon/location_icon.png'),
      iconSize: [iconSize]

    }
  )
} 

const GoogleMap = (props) => {
  const {position, hotel} = props;
  return (
    <div>
      <Map className="map" center={position} zoom={10} style = {{height: "100vh", width:"100%"}}>  
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          hotel.map(currentLocation => (
            <Marker position={currentLocation.location} icon={GetIcon(20)}>
        </Marker>

          ))
        }
        
      </Map>
    </div>
  );
};

export default GoogleMap;