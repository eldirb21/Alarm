import {View, Text} from 'react-native';
import React from 'react';
import {dataStack} from './nav-data';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {dataStack.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
}
