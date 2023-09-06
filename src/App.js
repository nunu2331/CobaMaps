// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapScreen from './screens/MapScreen';
import SplashScreen from './screens/SplashScreen';
import ListMapScreen from './screens/ListMapScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{ headerShown: false }}
          initialRouteName="Splash"
          >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="ListMap" component={ListMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;