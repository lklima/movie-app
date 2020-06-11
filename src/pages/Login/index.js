import React, {useState} from 'react';
import {
  Container,
  StatusBar,
  Logo,
  Text,
  Button,
  ButtonText,
  ButtonLoad,
} from './styles';

import LogoPic from '~/assets/images/video-logo.png';

export default function Login({navigation}) {
  const [load, setLoad] = useState(false);

  function handleLogin() {
    setLoad(true);
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2500);
  }

  return (
    <Container>
      <StatusBar />

      <Logo source={LogoPic} />

      <Text>Bem Vindo ao Movie App</Text>

      <Button onPress={handleLogin}>
        {load ? <ButtonLoad /> : <ButtonText>START</ButtonText>}
      </Button>
    </Container>
  );
}
