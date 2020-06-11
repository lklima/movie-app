import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, TabText} from './styles';

const TabItem = ({iconName, size, focused, routeName}) => (
  <Container focused={focused}>
    <Icon name={iconName} size={size} color="white" />

    {focused ? <TabText>{routeName}</TabText> : null}
  </Container>
);

export default TabItem;
