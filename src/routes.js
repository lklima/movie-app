import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Movies from '~/pages/Movies';
import MovieDetails from '~/pages/MovieDetails';
import Login from '~/pages/Login';
import Favorites from '~/pages/Favorites';
import User from '~/pages/User';
import {colors} from '~/styles';
import TabItem from '~/components/TabItem';

const Movie = createStackNavigator(
  {
    Movies,
    MovieDetails,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const Main = createAppContainer(
  createBottomTabNavigator(
    {
      Movie,
      Favorites,
      User,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused}) => {
          const {routeName} = navigation.state;
          let iconName;
          let size;
          let page;
          switch (routeName) {
            case 'Movie':
              iconName = 'list-ul';
              page = 'Filmes';
              size = focused ? 28 : 25;
              break;
            case 'Favorites':
              iconName = 'heart-o';
              size = focused ? 28 : 25;
              page = 'Favoritos';
              break;
            case 'User':
              iconName = 'user-o';
              size = focused ? 28 : 25;
              page = 'Perfil';
              break;
            default:
              break;
          }
          return (
            <TabItem
              focused={focused}
              routeName={page}
              size={size}
              iconName={iconName}
            />
          );
        },
      }),
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        showLabel: false,
        tabStyle: {
          backgroundColor: 'transparent',
        },
        style: {
          backgroundColor: colors.primary,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 50,
          position: 'absolute',
          bottom: 0,
        },
        labelStyle: {
          fontSize: 13,
          marginTop: -5,
        },
      },
    },
  ),
);

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
  }),
);

export default Routes;
