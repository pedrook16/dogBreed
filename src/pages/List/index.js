import React from 'react';
import {useDispatch} from 'react-redux';

import Background from '~/components/Background';

import {dogRequest} from '~/store/modules/DogBreed/actions';

import {Container, Content, ContentDog, BreedText} from './styles';

export default function List({navigation}) {
  const dispach = useDispatch();

  function handleBreed(breed) {
    dispach(dogRequest(breed));
    navigation.navigate('ListDogs');
  }

  return (
    <Background>
      <Container>
        <Content onPress={() => handleBreed('chihuahua')}>
          <ContentDog>
            <BreedText>Chihuahua</BreedText>
          </ContentDog>
        </Content>
        <Content onPress={() => handleBreed('husky')}>
          <ContentDog>
            <BreedText>Husky</BreedText>
          </ContentDog>
        </Content>
        <Content onPress={() => handleBreed('pug')}>
          <ContentDog>
            <BreedText>Pug</BreedText>
          </ContentDog>
        </Content>
        <Content onPress={() => handleBreed('labrador')}>
          <ContentDog>
            <BreedText>Labrador</BreedText>
          </ContentDog>
        </Content>
      </Container>
    </Background>
  );
}
