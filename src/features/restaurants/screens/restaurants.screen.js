import React, { Fragment } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
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
      <ListContainer>
        <RestaurantInfo restaurant={{ name: 'Cafetería UTT' }} />
      </ListContainer>
    </Fragment>
  );
}

