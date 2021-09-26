import React, { Fragment } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";

export default function RestaurantsScreen() {
  return (
    <Fragment>
      <View style={styles.searchBar}>
        <Searchbar />
      </View>
      <View style={styles.container}>
        <RestaurantInfo />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
  searchBar: {
    padding: 16,
    backgroundColor: "green",
  },
});
