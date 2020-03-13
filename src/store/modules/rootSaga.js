import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import dog from './DogBreed/sagas';

export default function* rootSaga() {
  return yield all([auth, dog]);
}
