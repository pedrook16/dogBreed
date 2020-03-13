import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {dogFailure, dogSuccess} from './actions';

export function* dog({payload}) {
  try {
    const {breed} = payload;

    const response = yield call(api.get, `list?breed=${breed}`);

    yield put(dogSuccess(response.data));
  } catch (err) {
    yield put(dogFailure());
  }
}

export default all([takeLatest('@dogs/DOG_REQUEST', dog)]);
