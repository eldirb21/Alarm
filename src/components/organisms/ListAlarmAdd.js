import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import Floating from '../atoms/Floating';
import Texts from '../atoms/Texts';
import Icons from '../atoms/Icons';
import AppBar from '../molecules/AppBar';
import Content from '../atoms/Content';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import TouchOpacity from '../atoms/TouchOpacity';

export default function ListAlarmAdd() {
  const [isVisible, setisVisible] = useState(false);
  var date = new Date();
  const [time, settime] = useState(date.getTime());
  return (
    <>
      <Floating
        onPress={() => {
          setisVisible(!isVisible);
        }}
      />
      <Modal
        visible={isVisible}
        transparent
        onRequestClose={() => setisVisible(false)}
      >
        <View style={styles.container}>
          <AppBar
            backable
            onLeft={() => setisVisible(false)}
            title={'Setel alarm'}
            bg="#000"
            color="#FFFF"
          />
          <Content>
            <View style={{height: 150}}>
              <TouchOpacity
                onPress={() => {
                  console.log('press');
                }}
                style={{
                  zIndex: 999,
                  borderWidth: 0.2,
                  margin: 10,

                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <DatePicker
                  style={{
                    width: 50,
                    fontSize: 20,
                    height: 40,
                    // backgroundColor: 'pink',
                  }}
                  customStyles={{
                    dateInput: {
                      borderWidth: 0,
                      borderBottomWidth: 2,
                      alignItems: 'flex-start',
                    },
                    placeholderText: {
                      fontSize: 17,
                      color: 'white',
                    },
                    dateText: {
                      fontSize: 17,
                      color: 'white',
                    },
                  }}
                  textColor="#000"
                  androidVariant="iosClone"
                  mode="time"
                  date={new Date()}
                  onDateChange={val => {
                    console.log(val);
                  }}
                />
              </TouchOpacity>
              {/* <RNDateTimePicker
                positiveButtonLabel="OK!"
                display="default"
                value={date}
                mode="time"
                // date={}
                collapsable={true}
                accessible={true}
              /> */}
            </View>
            <View style={styles.content}>
              <View style={styles.row}>
                <Icons name="content-copy" size={20} />
                <View style={{marginLeft: 15}}>
                  <Texts>Ulangi</Texts>
                  <Texts>Satu kali</Texts>
                </View>
              </View>
              <View style={styles.row}>
                <Icons name="bell-circle-outline" size={20} />
                <View style={{marginLeft: 15}}>
                  <Texts>Bunyi alarm</Texts>
                  <Texts>Nada dering default(Kilau Kaca)</Texts>
                </View>
              </View>
              <View style={styles.row}>
                <Icons type={'AntDesign'} name="shake" size={20} />
                <View style={styles.row_between}>
                  <Texts>Getar</Texts>
                  <Switch />
                </View>
              </View>
              <View style={styles.row}>
                <Icons name="label-outline" size={20} />
                <View style={{marginLeft: 15}}>
                  <Texts>Label</Texts>
                  <Texts>Label</Texts>
                </View>
              </View>
            </View>
          </Content>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  row_between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 15,
  },
  container: {
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    right: 0,
    flex: 1,
    left: 0,
    top: 0,
  },
  content: {
    borderTopWidth: 0.3,
    marginTop: 20,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
