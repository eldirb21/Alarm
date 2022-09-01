import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function TouchOpacity({children, padding, style, ...res}) {
  return (
    <TouchableOpacity
      style={[
        style,
        {
          padding: padding ? padding : 2,
        },
      ]}
      activeOpacity={0.8}
      {...res}
    >
      {children}
    </TouchableOpacity>
  );
}
