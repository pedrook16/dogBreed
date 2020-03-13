import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '~/pages/Sign';
import List from '~/pages/List';
import ListDogs from '~/pages/ListDogs';

const Stack = createStackNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="ListDogs" component={ListDogs} />
    </Stack.Navigator>
  );
}
