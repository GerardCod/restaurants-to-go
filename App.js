import React from 'react';
import { SafeAreaView } from 'react-native';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <SafeAreaView style={{ paddingHorizontal: 16, paddingVertical: 32, }}>
      <RestaurantsScreen />
    </SafeAreaView>
  );
}

