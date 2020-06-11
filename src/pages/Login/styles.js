import styled from 'styled-components/native';
import {colors} from '~/styles';

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.secondary,
  barStyle: 'light-content',
})``;

export const Container = styled.View`
  background: ${colors.secondary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 150px;
  width: 150px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin-top: 30px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  width: 80%;
  height: 60px;
  border-radius: 15px;
  margin-top: 100px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 23px;
  font-weight: bold;
`;

export const ButtonLoad = styled.ActivityIndicator.attrs({
  color: 'white',
  size: 'large',
})``;
