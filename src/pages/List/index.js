import React from 'react';
import Background from '~/components/Background';

import {Container, Content, ContentDog, BreedText} from './styles';

export default function List({navigation}) {
  function handleBreed(breed) {
    navigation.navigate('ListDogs', breed);
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
