import React, {Component, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
  View,
  Text,
  Switch,
} from 'react-native';

var days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
const list = [
  {
    time: '05.10',
    name: 'Time To Jogging',
    subtitle: days.filter(x => x != 'Min'),
    active: false,
  },
  {
    time: '06.00',
    name: 'Time To work',
    subtitle: days.filter(x => x == 'Sen'),
    active: false,
  },
  {
    time: '05.10',
    name: 'Time To Jogging',
    subtitle: days.filter(x => x != 'Min'),
    active: false,
  },
  {
    time: '06.00',
    name: 'Time To work',
    subtitle: days.filter(x => x == 'Sen'),
    active: false,
  },
  {
    time: '05.10',
    name: 'Time To Jogging',
    subtitle: days.filter(x => x != 'Min'),
    active: false,
  },
  {
    time: '06.00',
    name: 'Time To work',
    subtitle: days.filter(x => x == 'Sen'),
    active: false,
  },
  {
    time: '05.10',
    name: 'Time To Jogging',
    subtitle: days.filter(x => x != 'Min'),
    active: false,
  },
  {
    time: '06.00',
    name: 'Time To work',
    subtitle: days.filter(x => x == 'Sen'),
    active: false,
  },
  {
    time: '05.10',
    name: 'Time To Jogging',
    subtitle: days.filter(x => x != 'Min'),
    active: false,
  },
  {
    time: '06.00',
    name: 'Time To work',
    subtitle: days.filter(x => x == 'Sen'),
    active: false,
  },
  {
    time: '05.10',
    name: 'Time To Jogging',
    subtitle: days.filter(x => x != 'Min'),
    active: false,
  },
  {
    time: '06.00',
    name: 'Time To work',
    subtitle: days.filter(x => x == 'Sen'),
    active: false,
  },
  {
    time: '05.10',
    name: 'Time To Jogging',
    subtitle: days.filter(x => x != 'Min'),
    active: false,
  },
  {
    time: '06.00',
    name: 'Time To work',
    subtitle: days.filter(x => x == 'Sen'),
    active: false,
  },
];

function ListAlarms() {
  const [alarms, setalarms] = useState(list);
  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({item, index}) => {
    var colors = item.active ? '#FFF' : '#BBBBBB';
    return (
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.96}
        key={index}
      >
        <View style={styles.content}>
          <Text style={{fontSize: 25, color: colors}}>{item.time}</Text>
          <View style={{marginLeft: 15}}>
            <Text style={{fontSize: 14, color: colors}}>{item.name}</Text>
            <View style={styles.render_sub}>
              {item.subtitle &&
                item.subtitle.map((x, i) => (
                  <View key={i} style={{padding: 2}}>
                    <Text style={{fontSize: 12, color: colors}}>{x}</Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
        <Switch
          style={{marginRight: item.active ? 5 : -3}}
          value={item.active}
          trackColor={colors}
          thumbColor={colors}
          color={colors}
          onChange={val => {
            var newalarms = [...alarms];
            newalarms[index].active = !newalarms[index].active;
            setalarms(newalarms);
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={alarms}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 10,
    padding: 10,
    margin: 15,
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

export default ListAlarms;
