import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const Map = () => {
  const mapboxAccessToken = '';

  const [viewport, setViewport] = React.useState({
    latitude: 40.7128,
    longitude: -74.006,
    zoom: 10
  });

  return (
    <div style={{ height: '400px' }}>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken={mapboxAccessToken}
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        <Marker latitude={40.7128} longitude={-74.006}>
          <div>Marker Content</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
