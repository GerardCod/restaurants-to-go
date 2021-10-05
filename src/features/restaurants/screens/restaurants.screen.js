import React, { Fragment } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { restaurantsMock } from "../../../infrastructure/data/mockdata";
import RestaurantInfo from "../components/restaurant-info.component";

const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
`
const SearchContainer = styled.View`
  padding: 16px;
`;

export default function RestaurantsScreen() {
  return (
    <Fragment>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={restaurantsMock}
        renderItem={RestaurantInfo}
        keyExtractor={(item) => `restaurant: ${item.id}`}
        contentContainerStyle={styles.listContainer}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    marginTop: 10
  }
});

