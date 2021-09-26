import React, { Fragment } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function RestaurantsScreen() {

  return (
    <Fragment>
      <View style={{ padding: 16, backgroundColor: 'green' }}>
        <Text>Search</Text>
      </View>
      <View style={styles.container}>
        <Text>Hello from React Native!</Text>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  }
})