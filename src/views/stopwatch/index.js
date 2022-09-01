import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/atoms/Container';
import AppBar from '../../components/molecules/AppBar';
import Content from '../../components/atoms/Content';
import Texts from '../../components/atoms/Texts';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import Icons from '../../components/atoms/Icons';
import TouchOpacity from '../../components/atoms/TouchOpacity';
const {height, width} = Dimensions.get('screen');
const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 2,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFF',
  },
};
export default function Stopwatchs() {
  var currentTime = '';
  const [state, setstate] = useState({
    timerStart: false,
    stopwatchStart: false,
    totalDuration: 90000,
    timerReset: false,
    stopwatchReset: false,
    timeSave: [],
    timeWatch: 0,
  });

  function toggleTimer() {
    setstate({
      ...state,
      timerStart: !state.timerStart,
      timerReset: false,
    });
  }

  function resetTimer() {
    setstate({
      ...state,
      timerStart: false,
      timerReset: true,
    });
  }

  function toggleStopwatch() {
    setstate({
      ...state,
      stopwatchStart: !state.stopwatchStart,
      stopwatchReset: false,
    });
  }

  function resetStopwatch() {
    setstate({
      ...state,
      stopwatchStart: false,
      stopwatchReset: true,
      timeWatch: 0,
      timeSave: [],
    });
  }

  function getFormattedTime(time) {
    if (state.stopwatchReset) {
      return (currentTime = 0);
    }
    return (currentTime = time);
  }
  const handleTimerComplete = () => alert('custom completion function');
  return (
    <Container>
      <AppBar
        title={'Stopwatch'}
        bordered
        rightIcon={'dots-vertical'}
        onRight={() => {
          console.log('press me');
        }}
      />
      <Content containerStyle={styles.content} scroll>
        <View
          style={{
            width: width,
            height: height - 118,
            backgroundColor: 'grey',
          }}
        >
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          >
            <Texts style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
              Stopwatch
            </Texts>
            <TouchableOpacity activeOpacity={0.8} style={styles.circle}>
              <Stopwatch
                start={state.stopwatchStart}
                reset={state.stopwatchReset}
                getTime={getFormattedTime}
                options={options}
                msecs
                laps
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchOpacity onPress={resetStopwatch} padding={10}>
              <Icons name="arrow-u-left-top" size={20} color="red" />
            </TouchOpacity>
            <TouchOpacity
              style={styles.toggle_play}
              onPress={toggleStopwatch}
              padding={10}
            >
              <Icons
                name={!state.stopwatchStart ? 'play' : 'stop'}
                size={20}
                color="red"
              />
            </TouchOpacity>
            <TouchOpacity onPress={resetTimer} padding={10}>
              <Icons name="flag-checkered" size={20} color="red" />
            </TouchOpacity>
          </View>
        </View>
        <View
          style={{
            width: width,
            height: height - 115,
            backgroundColor: 'grey',
          }}
        >
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          >
						 <Texts style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
              Timer
            </Texts>
            <TouchableOpacity activeOpacity={0.8} style={styles.circle}>
              <Timer
                totalDuration={state.totalDuration}
                handleFinish={handleTimerComplete}
                start={state.timerStart}
                reset={state.timerReset}
                getTime={getFormattedTime}
                options={options}
                msecs
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchOpacity onPress={resetTimer} padding={10}>
              <Icons name="arrow-u-left-top" size={20} color="red" />
            </TouchOpacity>
            <TouchOpacity
              style={styles.toggle_play}
              onPress={toggleTimer}
              padding={10}
            >
              <Icons
                name={!state.timerStart ? 'play' : 'stop'}
                size={20}
                color="red"
              />
            </TouchOpacity>
            <TouchOpacity onPress={resetTimer} padding={10}>
              <Icons name="flag-checkered" size={20} color="red" />
            </TouchOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: width / 2,
    borderWidth: 5,
    borderRadius: 100,
    height: width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggle_play: {
    backgroundColor: 'gold',
    borderRadius: 100,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    alignSelf: 'center',
  },
});
