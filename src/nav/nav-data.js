import Alarm from '../views/alarm';
import AlarmAdd from '../views/alarm/alarm-add';
import Home from '../views/home';
import Jadwal from '../views/jadwal';
import JadwalAdd from '../views/jadwal/jadwal-add';
import Stopwatchs from '../views/stopwatch';
import Timer from '../views/timer';
import Tabs from './tabs';

const dataTab = [
  {
    component: Home,
    name: 'Home',
  },
  {
    component: Jadwal,
    name: 'Jadwal',
  },
  {
    component: Alarm,
    name: 'Alarm',
  },
  {
    component: Timer,
    name: 'Timer',
  },
  {
    component: Stopwatchs,
    name: 'Stopwatch',
  },
];
const dataStack = [
	{
    component: Tabs,
    name: 'Tabs',
  },
  {
    component: AlarmAdd,
    name: 'AlarmAdd',
  },
	{
    component: JadwalAdd,
    name: 'JadwalAdd',
  },
];

export {dataTab, dataStack};
