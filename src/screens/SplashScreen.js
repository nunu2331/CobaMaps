import React, { Component, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

export default function SplashScreen({navigation}) {
    
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Map');
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontFamily: 'Arial',fontWeight: 'bold', fontSize: 32, color: '#ff0000' }}>
      WELCOME
    </Text>
      <ActivityIndicator
       size="large" />
    </View>
  );
}

