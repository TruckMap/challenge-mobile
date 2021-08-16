import React, { memo } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const latitude = 40.723279;
const longitude = -73.970895;

const MapView = () => {
  // https://github.com/react-native-mapbox-gl/maps/blob/master/docs/MapView.md
  // https://github.com/react-native-mapbox-gl/maps/blob/master/docs/Camera.md
  // https://github.com/react-native-mapbox-gl/maps/blob/master/docs/ShapeSource.md

  return (
    <MapboxGL.MapView style={{ flex: 1 }} >
      <MapboxGL.Camera
        centerCoordinate={[longitude, latitude]}
        zoomLevel={11}
      />
    </MapboxGL.MapView>
  );
}

export default memo(MapView);