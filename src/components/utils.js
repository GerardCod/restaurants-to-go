import styled from "styled-components";
import { Card } from "react-native-paper";

export const Title = styled.Text`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${props => props.theme.colors.text.primary};
`;

export const RestaurantContent = styled(Card.Content)`
  padding-top: ${props => props.theme.space[3]};
`

export const RestaurantCard = styled(Card)`
  margin-bottom: ${props => props.theme.sizes[1]}
`

export const RestaurantCover = styled(Card.Cover)`
  background-color: ${props => props.theme.colors.ui.primary};
`;

export const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
`