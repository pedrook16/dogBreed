import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Background from '~/components/Background';
import {signInRequest} from '~/store/modules/auth/actions';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function Sign() {
  const dispach = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState('');

  function handleSubmit() {
    dispach(signInRequest(email));
  }

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            keyboardType="email-address"
            autoCorret={false}
            autoCapitalize="none"
            placeholder="Digite seu e-email"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={email}
            onChangeText={setEmail}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
