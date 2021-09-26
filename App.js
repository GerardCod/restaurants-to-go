import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});
