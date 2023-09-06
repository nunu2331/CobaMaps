import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import MapView, {MAP_TYPES, Marker, Polygon} from 'react-native-maps';


export default function MapScreen({navigation}) {
  const DATA = {
    coordinates: [
      {name: '1', latitude: -7.795389495173164, longitude: 110.3702035464823},
      {name: '2', latitude: -7.71827811000456, longitude: 110.33411631094789},
      {name: '3', latitude: -7.766904635383872, longitude: 110.2925282470946},
      {name: '4', latitude: -7.821705750126578, longitude: 110.32496693690018},
      {name: '5', latitude: -7.81140533665971, longitude: 110.36364383628374},
      {name: '6', latitude: -7.777206143971632, longitude: 110.39192371970395},
    ],
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <MapView
    style={styles.map}
      initialRegion={{
        latitude: -7.795389495173164,
        longitude: 110.3702035464823,
        latitudeDelta: 0.1522,
        longitudeDelta: 0.1521,
      }}
    >
            <Polygon
              key={1}
              coordinates={[
                {name: '1', latitude: -7.74442, longitude: 110.345224},
                {name: '2', latitude: -7.7551684, longitude: 110.3263145},
                {name: '3', latitude: -7.7587492, longitude: 110.3336806},
                {name: '4', latitude: -7.751686, longitude: 110.286059},
                {name: '5', latitude: -7.778275, longitude: 110.304634},
                {name: '6', latitude: -7.807868, longitude: 110.350296},
                {name: '7', latitude: -7.840303, longitude: 110.360627},
                {name: '8', latitude: -7.816325, longitude: 110.391698},
                {name: '9', latitude: -7.765150, longitude: 110.394762},
                {name: '10', latitude: -7.773994, longitude: 110.373476},
              ]}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
            <Marker
            coordinate={{latitude: -7.7723542096028995, longitude: 110.3867466084854}}
            />
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  }
});

