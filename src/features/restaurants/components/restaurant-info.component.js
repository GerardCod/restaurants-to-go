import React, { Fragment } from "react";
import { Card } from "react-native-paper";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Text } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const Title = styled.Text`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${props => props.theme.colors.text.primary};
`;

const RestaurantContent = styled(Card.Content)`
  padding-top: ${props => props.theme.space[3]};
`

const RestaurantCard = styled(Card)`
  margin-bottom: ${props => props.theme.sizes[1]}
`

const RestaurantCover = styled(Card.Cover)`
  background-color: ${props => props.theme.colors.ui.primary};
`;

const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
`

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
          <RatingContainer>
            {
              ratingArray.map((_, idx) => <SvgXml xml={star} width={20} height={20} key={`star-rating: ${idx}`} />)
            }
          </RatingContainer>
          <Text>{ address }</Text>
        </RestaurantContent>
      </RestaurantCard>
    </Fragment>
  );
}

RestaurantInfo.propTypes = {
  restaurant: PropTypes.object.isRequired
}