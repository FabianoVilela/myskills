import React, {useState} from 'react';
import {FlatList} from 'react-native';
import uuid from 'react-native-uuid';

import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';
import {Container, Input, Title} from './styles';

interface SkillData {
  id: string;
  title: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  function handleAddNewSkill() {
    const skill: SkillData = {
      id: String(uuid.v4()),
      title: newSkill,
    };

    setMySkills([...mySkills, skill]);
  }

  return (
    <Container>
      <Title>Hello, Fabiano</Title>
      <Input placeholder="Minha task" onChangeText={setNewSkill} />
      <Button title="Add" onPress={handleAddNewSkill} />
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard title={item.title} onPress={() => {}} />
        )}
      />
    </Container>
  );
}
4;
