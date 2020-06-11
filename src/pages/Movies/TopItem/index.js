import React from 'react';
import StarRating from 'react-native-star-rating';
import {colors} from '~/styles';

import {Container, Pic, MovieTitle, RightView, MovieRelease} from './styles';

const TopItem = ({item, index, navigation}) => (
  <Container onPress={() => navigation.navigate('MovieDetails', {item})}>
    <Pic
      resizeMode="contain"
      source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
    />

    <RightView>
      <MovieTitle numberOfLines={1}>{item.title} </MovieTitle>

      <MovieRelease>({new Date(item.release_date).getFullYear()})</MovieRelease>

      <StarRating
        disabled
        maxStars={5}
        rating={item.vote_average / 2}
        halfStarColor={colors.star}
        fullStarColor={colors.star}
        emptyStarColor={colors.star}
        starSize={25}
        containerStyle={{width: 70}}
      />
    </RightView>
  </Container>
);

export default TopItem;
