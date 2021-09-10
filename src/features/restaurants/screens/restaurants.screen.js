import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default function RestaurantScreen({ restaurant }) {
  return (
    <View>
      <Text>{ restaurant.title }</Text>
    </View>
  );
}

RestaurantScreen.propTypes = {
  restaurant: PropTypes.object.isRequired
}