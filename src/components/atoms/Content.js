import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

export default function Content({
  bg,
  scroll,
  children,
  pd,
  ph,
  pv,
  containerStyle,
  ...props
}) {
  var styled = {
    flex: 1,
    display: 'flex',
    backgroundColor: bg,
  };

  return scroll ? (
    <KeyboardAvoidingView
      style={styled}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        style={styled}
        {...props}
      >
        <View
          style={[
            containerStyle,
            {
              flex: 1,
              marginBottom: 4,
              padding: pd ? 20 : 0,
            },
          ]}
        >
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  ) : (
    <SafeAreaView
      style={[
        styled,
        containerStyle,
        pd && {padding: 20},
        ph && {paddingHorizontal: 20},
        pv && {paddingVertical: 20},
      ]}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
}
