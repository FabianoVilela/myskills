import React, {useState} from 'react';
import {FlatList} from 'react-native';

import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';
import {Container, Input, Title} from './styles';

export function Home() {
  const [newSkill, setNewSkill] = useState(null);
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
  }

  return (
    <Container>
      <Title>Hello, Fabiano</Title>
      <Input placeholder="Minha task" onChangeText={setNewSkill} />
      <Button title={'Add'} onPress={handleAddNewSkill} />
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} onPress={() => {}} />}
      />
    </Container>
  );
}
4;
