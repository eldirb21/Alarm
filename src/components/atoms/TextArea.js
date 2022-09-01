import React from 'react';
import {TextInput, View} from 'react-native';

import AText from './a-text';

export default function TextArea(props) {
  const {label, error, numberLines, containerStyle, labelStyle, textStyle} =
    props;
  return (
    <View style={[containerStyle, {marginBottom: 10}]}>
      <AText style={[labelStyle, {color: '#9A9A9A', fontWeight: '500'}]}>
        {label}
      </AText>
      <TextInput
        numberOfLines={numberLines ? numberLines : 4}
        placeholderTextColor="grey"
        placeholder={label}
				multiline={true}
        style={[
          textStyle,
          {
            color: '#000',
            borderWidth: 1,
            borderColor: '#D7D7D7',
            borderRadius: 10,
            textAlignVertical: 'top',
            padding: 10,
          },
        ]}
        {...props}
      />
      {error == '' || <AText style={{color: 'red'}}>{error}</AText>}
    </View>
  );
}
