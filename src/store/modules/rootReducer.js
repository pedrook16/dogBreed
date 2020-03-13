import {combineReducers} from 'redux';

import auth from './auth/reducer';
import dog from './DogBreed/reducer';

export default combineReducers({
  auth,
  dog,
});
