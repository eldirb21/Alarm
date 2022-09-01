import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/atoms/Container';
import AppBar from '../../components/molecules/AppBar';
import Content from '../../components/atoms/Content';

export default function Home() {
  return (
    <Container>
      <AppBar title={'Home'} bordered/>
      <Content></Content>
    </Container>
  );
}
