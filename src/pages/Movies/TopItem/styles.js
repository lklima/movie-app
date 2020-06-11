import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 150px;
  width: 100%;
  margin-bottom: 5px;
  align-items: center;
  flex-direction: row;
`;

export const Pic = styled.Image`
  width: 30%;
  height: 100%;
  border-radius: 15px;
  margin-right: 10px;
`;

export const RightView = styled.View`
  width: 100%;
`;

export const MovieTitle = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: bold;
`;

export const MovieRelease = styled.Text`
  color: white;
  font-size: 20px;
  margin-bottom: 5px;
`;
