import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/atoms/Container';
import ListAlarms from '../../components/organisms/ListAlarms';
import Floating from '../../components/atoms/Floating';
import ListAlarmAdd from '../../components/organisms/ListAlarmAdd';
import AppBar from '../../components/molecules/AppBar';
import {useNavigation} from '@react-navigation/native';

export default function Alarm() {
  const navigation = useNavigation();
  return (
    <Container>
      <AppBar title={'Alarm'} bordered />
      <ListAlarms />

      {/* <View>
        <ListAlarmAdd />
      </View> */}
      <Floating
        onPress={() => {
          navigation.navigate('AlarmAdd');
        }}
      />
    </Container>
  );
}
