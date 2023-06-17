import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.6281,
  lng: -74.4141
};

const position = {
  lat: 40.6281,
  lng: -74.4141
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
