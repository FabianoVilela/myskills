import React from 'react';
import {Container, Input, Title} from './styles';
// import {TextInput} from 'react-native';

export function Home() {
  return (
    <Container>
      <Title>Hello, Fabiano</Title>
      <Input placeholder="Minha task" />
    </Container>
  );
}
