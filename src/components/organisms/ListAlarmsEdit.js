import React, {Component, useState} from 'react';
import {
  Button,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Switch, FAB} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

function ListAlarmsEdit() {
  const [isvisible, setisvisible] = useState(false);
  const keyExtractor = (item, index) => index.toString();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');

  const showDatePicker = () => {
    console.log('pressme');
    setisvisible(!isvisible);
  };

  const handleDatePicked = () => {
    setisvisible(false);
  };
  const hideDateTimePicker = () => {
    console.log('hideDateTimePicker');
    hideDatePicker();
  };
  const onChange = val => {
    var newDate = new Date(val.nativeEvent.timestamp);
    setDate(newDate);
    setisvisible(false);
    // hideDatePicker();
  };
  return (
    <>
      <FAB
        size="large"
        style={{marginBottom: 20}}
        icon={{name: 'add', color: 'white'}}
        color="green"
        onPress={() => showDatePicker()}
      />

      {isvisible && (
        <DateTimePicker
          testID="dateTimePicker"
          onChange={onChange}
          mode={'datetime'}
          display="default"
          is24Hour={true}
          value={date}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    padding: 10,
    margin: 15,
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  render_sub: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
  },
});

export default ListAlarmsEdit;
