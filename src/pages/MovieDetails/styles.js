import styled from 'styled-components/native';
import {colors} from '~/styles';

export const Container = styled.View`
  background: ${colors.secondary};
  flex: 1;
  align-items: center;
`;

export const BackButtonView = styled.View`
  width: 100%;
`;
export const BackButton = styled.TouchableOpacity``;

export const Pic = styled.Image`
  width: 150px;
  height: 200px;
  border-radius: 15px;
  margin-right: 10px;
`;

export const DetailsView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MovieTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 18px;
`;

export const MovieRelease = styled.Text`
  color: white;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const MovieDescription = styled.Text`
  color: white;
  font-size: 18px;
  margin: 10px;
  text-align: justify;
`;
