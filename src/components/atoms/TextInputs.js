import React from 'react';
import Aicon from './Icons';
import AText from './Texts';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

export default function TextInputs(props) {
  const {onPress, margin, width, textColor, containerStyle} = props;
  return (
    <View
      style={[
        style.container,
        width && {width: width},
        {margin: margin ? margin : 20},
      ]}
    >
      <TextInput
        {...props}
        style={[
          style.input,
          containerStyle,
          {
            // backgroundColor:'red',
            color: textColor ? textColor : '#000',
            borderColor: textColor ? textColor : 'grey',
          },
        ]}
        placeholderTextColor={textColor ? textColor : 'grey'}
        placeholder="Search"
      />
      <TouchableOpacity style={style.icon} onPress={onPress}>
        <Aicon
          type="Octicons"
          name="search"
          size={20}
          color={textColor ? textColor : 'grey'}
        />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 45,

    borderRadius: 20,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,

    paddingHorizontal: 20,
  },
  icon: {
    position: 'absolute',
    right: 16,
  },
});
