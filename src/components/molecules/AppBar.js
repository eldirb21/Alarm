import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icons from '../atoms/Icons';
import Texts from '../atoms/Texts';
import TouchOpacity from '../atoms/TouchOpacity';
import {useNavigation} from '@react-navigation/native';

export default function AppBar({
  bg,
  title,
  color,
  onLeft,
  onRight,
  leftIcon,
  rightIcon,
  backable,
  bordered,
}) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        bordered && {borderBottomWidth: 0.2},
        {backgroundColor: bg ? bg : 'transparent'},
      ]}
    >
      {backable && (
        <TouchOpacity onPress={onLeft ? onLeft : () => navigation.goBack()}>
          <Icons
            name={leftIcon ? leftIcon : 'close'}
            size={20}
            color={color ? color : '#000'}
          />
        </TouchOpacity>
      )}
      <View style={styles.content}>
        <Texts style={{fontWeight: '600', color: color ? color : '#000'}}>
          {title}
        </Texts>
        {onRight && (
          <TouchOpacity onPress={onRight}>
            <Icons
              name={rightIcon ? rightIcon : 'check'}
              size={20}
              color={color ? color : '#000'}
            />
          </TouchOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,

    borderColor: 'rgba(0,0,0,.08)',
  },
  content: {
    marginLeft: 10,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
