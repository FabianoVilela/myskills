import React from 'react';

import {Container, Title} from './styles';

export function SkillCard({skill, ...rest}) {
  return (
    <Container {...rest}>
      <Title>{skill}</Title>
    </Container>
  );
}
