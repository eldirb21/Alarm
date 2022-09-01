import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useIsFocused, useRoute} from '@react-navigation/native';

export default function Container(props) {
  var {bg, barStyle, children, style, route} = props;
  var focused = useIsFocused();
  // var routes = useRoute();
  // var macthRoute = routes.name == route.route.name;
  function FocusAwareStatusBar(props) {
    return focused ? (
      <StatusBar
        {...props}
        backgroundColor={bg != undefined ? props.background : 'rgba(0,0,0,.10)'}
      />
    ) : null;
  }
  var styled = [style, {flex: 1, backgroundColor: bg ? bg : '#ecf0f1'}];
  return (
    <SafeAreaView style={styled}>
      <FocusAwareStatusBar barStyle={barStyle} background={bg} />
      {children}
    </SafeAreaView>
  );
}
