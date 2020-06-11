import styled from 'styled-components/native';
import {colors} from '~/styles';

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.secondary,
  barStyle: 'light-content',
})``;

export const Container = styled.View`
  background: ${colors.secondary};
  flex: 1;
  padding: 20px;
`;

export const TopView = styled.View`
  width: 100%;
  height: 250px;
`;

export const SectionTitleView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

export const SearchButton = styled.TouchableOpacity``;

export const SectionTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: white;
  font-size: 30px;
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
