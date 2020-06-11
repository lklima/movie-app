import React from 'react';
import {
  Container,
  BackButtonView,
  BackButton,
  Pic,
  MovieTitle,
  MovieRelease,
  MovieDescription,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';

import {colors} from '~/styles';

export default function MovieDetails({navigation}) {
  const details = navigation.getParam('item');

  return (
    <Container>
      <BackButtonView>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="keyboard-backspace" size={40} color="white" />
        </BackButton>
      </BackButtonView>

      <Pic
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
        }}
      />

      <MovieTitle>{details.title}</MovieTitle>

      <MovieRelease>
        {new Date(details.release_date).getFullYear()}
      </MovieRelease>

      <StarRating
        disabled
        maxStars={5}
        rating={details.vote_average / 2}
        halfStarColor={colors.star}
        fullStarColor={colors.star}
        emptyStarColor={colors.star}
        starSize={25}
      />

      <MovieDescription>{details.overview}</MovieDescription>
    </Container>
  );
}
