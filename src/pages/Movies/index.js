import React, {useEffect, useState, useMemo} from 'react';
import {Dimensions, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  LoadContainer,
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
  const topRated = useSelector((state) =>
    state.movies.topRated ? state.movies.topRated.results : [],
  );

  useEffect(() => {
    dispatch(MoviesActions.getAllMovies());
  }, [dispatch]);
  return (
    <Container>
      <StatusBar />
      {loading ? (
        <LoadContainer>
          <ActivityIndicator size="large" color="white" />
        </LoadContainer>
      ) : (
        <>
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
                <PopularItem h navigation={navigation} item={item} />
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
            renderItem={({item, index}) => (
              <TopItem navigation={navigation} item={item} index={index} />
            )}
            keyExtractor={(item) => String(item.id)}
            data={topRated || []}
            extraData={topRated}
          />
        </>
      )}
    </Container>
  );
}
