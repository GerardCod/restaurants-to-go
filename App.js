import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: isAndroid ? StatusBar.currentHeight : 0, flex: 1 }}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

