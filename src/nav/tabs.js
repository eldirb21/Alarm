import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {dataTab} from './nav-data';
import Home from '../views/home';
import Texts from '../components/atoms/Texts';
import Icons from '../components/atoms/Icons';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        var iconName = '';

        switch (label) {
          case 'Home':
            iconName = 'apps';
            break;
          case 'Jadwal':
            iconName = 'clipboard-list-outline';
            break;
          case 'Alarm':
            iconName = 'alarm';
            break;
          case 'Timer':
            iconName = 'timer-sand-paused';
            break;
          case 'Stopwatch':
            iconName = 'stopwatch';
            break;

          default:
            iconName = 'apps';
            break;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented)
            navigation.navigate(route.name);
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        var colored = isFocused ? '#FFF' : '#222';
        var styled = {backgroundColor: isFocused ? '#673ab7' : '#FFF'};
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            activeOpacity={0.8}
            accessibilityRole="button"
            onLongPress={onLongPress}
            testID={options.tabBarTestID}
            style={[styles.item, styled]}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityState={isFocused ? {selected: true} : {}}
          >
            <Icons
              name={iconName}
              type={label == 'Stopwatch' ? 'Entypo' : ''}
              size={20}
              color={colored}
            />
            <Texts style={{color: colored, marginTop: -2}}>{label}</Texts>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      {dataTab.map((item, index) => (
        <Tab.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'red',
    flexDirection: 'row',
    height: 45,
  },
  item: {
    flex: 1,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
