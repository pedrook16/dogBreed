import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';

import Background from '~/components/Background';

import {Container, ListDogBreed} from './styles';

export default function ListDogs() {
  const dogs = useSelector(state => state.dog.breed);
  return (
    <Background>
      <Container>
        <ListDogBreed
          data={dogs.list}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => (
            <Image
              source={{uri: item}}
              style={{height: 200, marginBottom: 5}}
            />
          )}
        />
      </Container>
    </Background>
  );
}
