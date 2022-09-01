import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/atoms/Container';
import AppBar from '../../components/molecules/AppBar';

export default function JadwalAdd() {
  return (
    <Container>
      <AppBar backable title={'Jadwal Add'} bordered />
    </Container>
  );
}
