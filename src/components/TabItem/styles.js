import styled from 'styled-components/native';
import {colors} from '~/styles';

export const Container = styled.View`
  background: ${(props) => (props.focused ? colors.tab : colors.primary)};
  padding: 6px 10px;
  border-radius: 6px;
  flex-direction: row;
`;

export const TabText = styled.Text`
  color: white;
  font-size: 20px;
  margin-left: 5px;
`;
