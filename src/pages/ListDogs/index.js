import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Overlay from 'react-native-modal-overlay';
import {Image, TouchableOpacity} from 'react-native';

import Background from '~/components/Background';
import api from '~/services/api';

import {Container, ListDogBreed} from './styles';

export default function ListDogs({route}) {
  const [dog, setDog] = useState([]);
  const [modalVisible, setModalVisible] = useState(Boolean);
  const [img, setImage] = useState('');

  useEffect(() => {
    async function loadDogBreed() {
      const response = await api.get(`list?breed=${route.params}`);
      setDog(response.data.list);
    }
    loadDogBreed();
  }, [route.params]);

  function onOpen(imageUri) {
    setImage(imageUri);
    setModalVisible(true);
  }

  function onClose() {
    setModalVisible(false);
  }

  return (
    <Background>
      <Container>
        <ListDogBreed
          data={dog}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onOpen(item)}>
              <Image
                source={{uri: item}}
                style={{height: 200, marginBottom: 5}}
              />
            </TouchableOpacity>
          )}
        />
      </Container>

      <Overlay visible={modalVisible} onClose={onClose} closeOnTouchOutside>
        <Image source={{uri: img}} style={{width: 375, height: 250}} />
      </Overlay>
    </Background>
  );
}

ListDogs.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.string,
  }),
};

ListDogs.defaultProps = {
  route: PropTypes.shape({
    params: null,
  }),
};
