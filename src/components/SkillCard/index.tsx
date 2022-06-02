import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  title: string;
}

export function SkillCard({title, ...rest}: SkillCardProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
