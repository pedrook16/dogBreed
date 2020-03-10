import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '~/services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email} = payload;

    const response = yield call(api.post, 'register', {
      email,
    });

    const {user} = response.data;

    api.defaults.headers.Authorization = `Bearer ${user.token}`;

    yield put(signInSuccess(user.token));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Erro no login, verifique seus dados');
    yield put(signFailure());
  }
}

export function satToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', satToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
