import React from 'react';

import {Container, Pic} from './styles';

const MovieItem = ({item, navigation}) => (
  <Container onPress={() => navigation.navigate('MovieDetails', {item})}>
    <Pic
      resizeMode="contain"
      source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
    />
  </Container>
);

export default MovieItem;
