import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #121015;
  padding: 50px 20px 0;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: #1f1e25;
  color: #fff;
  font-size: 18px;
  padding: ${Platform.OS === 'ios' ? '15px' : '10px'};
  margin-top: 30px;
  border-radius: 8px;
`;
