import React, { Fragment } from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "Some nice restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg"
    ],
    address = "some random street",
    isOpenNow = true,
    rating,
    isClosedTemporarily
  } = restaurant;
  
  return (
    <Fragment>
      <Card elevation={10}>
        <Card.Cover elevation={5} source={{ uri: photos[0] }} />
        <Card.Content style={styles.content}>
          <Text>{ name }</Text>
        </Card.Content>
      </Card>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 12,
  }
});

RestaurantInfo.propTypes = {
  restaurant: PropTypes.object.isRequired
}