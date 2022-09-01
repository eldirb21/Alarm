import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/atoms/Container';
import AppBar from '../../components/molecules/AppBar';
import Content from '../../components/atoms/Content';
import ListJadwal from '../../components/organisms/ListJadwal';
import Floating from '../../components/atoms/Floating';
import {useNavigation} from '@react-navigation/native';

export default function Jadwal() {
  const navigation = useNavigation();
  return (
    <Container>
      <AppBar title={'Jadwal'} bordered />
      <Content>
        <ListJadwal />

        <Floating
          onPress={() => {
            navigation.navigate('JadwalAdd');
          }}
        />
      </Content>
    </Container>
  );
}
