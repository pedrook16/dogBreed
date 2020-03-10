import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persitedReducer = persistReducer(
    {
      key: 'dogBreed',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers,
  );
  return persitedReducer;
};
