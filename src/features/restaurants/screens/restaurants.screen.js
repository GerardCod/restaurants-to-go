import React, { Fragment } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RestaurantsScreen() {
  return (
    <Fragment>
      <View>
        <Text>Search</Text>
      </View>
      <View style={styles.container}>
        <Text>Hello from React Native!</Text>
        <StatusBar style="auto" />
      </View>
    </Fragment>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
})