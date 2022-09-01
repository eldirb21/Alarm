import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Stacks from './src/nav/stacks';

import Tabs from './src/nav/tabs';


export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}