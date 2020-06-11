import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  StatusBar,
  SectionTitle,
  SectionTitleView,
  SearchButton,
  TopView,
} from './styles';
import {Creators as MoviesActions} from '~/store/ducks/movies';
import TopItem from './TopItem';
import PopularItem from './PopularItem';

const SLIDER_WIDTH = Dimensions.get('window').width;

export default function Movies({navigation}) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies.loading);
  const popMovies = useSelector((state) => state.movies.popularMovies);
  const topRated = useSelector((state) => state.movies.topRated);
  const [favorites, setfavorites] = useState([]);

  useEffect(() => {
    dispatch(MoviesActions.getAllMovies());
  }, [dispatch]);

  useEffect(() => {
    setfavorites(topRated.results);
  }, [topRated]);

  function handleFavorite() {}

  return (
    <Container>
      <StatusBar />

      <TopView>
        <SectionTitleView>
          <SectionTitle>Mais Populares</SectionTitle>

          <SearchButton>
            <Icon name="search" color="white" size={25} />
          </SearchButton>
        </SectionTitleView>

        <Carousel
          data={(popMovies && popMovies.results) || []}
          renderItem={({item}) => (
            <PopularItem navigation={navigation} item={item} />
          )}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={180}
        />
      </TopView>

      <SectionTitleView>
        <SectionTitle>Melhores Classificados</SectionTitle>

        <SearchButton />
      </SectionTitleView>

      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={(topRated && topRated.results) || []}
        renderItem={({item}) => (
          <TopItem
            handleFavorite={handleFavorite}
            navigation={navigation}
            item={item}
          />
        )}
      />
    </Container>
  );
}
