import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default function RestaurantsScreen({ restaurant }) {
  return (
    <View>
      <Text>{ restaurant.title }</Text>
    </View>
  );
}

RestaurantsScreen.propTypes = {
  restaurant: PropTypes.object.isRequired
}