import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icons from './Icons';

export default function Floating({bg, color, style, bordered, ...res}) {
  return (
    <TouchableOpacity
      {...res}
      activeOpacity={0.8}
      style={[
        style,
        styles.shadow,
        styles.container,
        {backgroundColor: bg ? bg : '#FFF'},
      ]}
    >
      <Icons name="plus" size={20} color={color ? color : '#000'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 100,
    padding: 15,
    bottom: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
