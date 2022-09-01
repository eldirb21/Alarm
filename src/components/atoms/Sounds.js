import {NativeModules, Platform} from 'react-native';

const {NotificationSounds} = NativeModules;

const Sounds = NotificationSounds;

export default Sounds;

export const playSampleSound = soundObject => {
  const sound = soundObject.url;
  NotificationSounds.playSample(sound);
};

export const stopSampleSound = () => {
  // const sound = Platform.OS === 'ios' ? soundObject.soundID : soundObject.url;
  NotificationSounds.stopSample();
};
