import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { RatingContainer, RestaurantContent, RestaurantCover, Title, RestaurantCard, StatsContainer } from "../../../components/utils";

export default function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "Some nice restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg"
    ],
    address = "some random street",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily
  } = restaurant;
  
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Fragment>
      <RestaurantCard elevation={5}>
        <RestaurantCover elevation={5} source={{ uri: photos[0] }} />
        <RestaurantContent>
          <Title>{ name }</Title>
          <StatsContainer>
            <RatingContainer>
              {
                ratingArray.map((_, idx) => <SvgXml xml={star} width={25} height={25} key={`star-rating: ${idx}`} />)
              }
            </RatingContainer>
            { isOpenNow && <SvgXml xml={open} width={25} height={25} /> }
          </StatsContainer>
          <Text>{ address }</Text>
        </RestaurantContent>
      </RestaurantCard>
    </Fragment>
  );
}

RestaurantInfo.propTypes = {
  restaurant: PropTypes.object.isRequired
}