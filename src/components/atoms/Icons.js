import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Icons({type, ...props}) {
  switch (type) {
    case 'AntDesign':
      return <AntDesign {...props} />;

    case 'Feather':
      return <Feather {...props} />;

    case 'Entypo':
      return <Entypo {...props} />;

    case 'FontAwesome':
      return <FontAwesome {...props} />;

    case 'FontAwesome5':
    case 'FontAwesome5Brands':
      return <FontAwesome5 {...props} />;

    case 'Fontawesome5pro':
      return <FontAwesome5Pro {...props} />;

    case 'Fontisto':
      return <Fontisto {...props} />;

    case 'EvilIcons':
      return <EvilIcons {...props} />;

    case 'Foundation':
      return <Foundation {...props} />;

    case 'Octicons':
      return <Octicons {...props} />;

    case 'MaterialIcons':
      return <MaterialIcons {...props} />;

    case 'Ionicons':
      return <Ionicons {...props} />;

    case 'SimpleLineIcons':
      return <SimpleLineIcons {...props} />;

    case 'Zocial':
      return <Zocial {...props} />;
  }

	return <MaterialCommunityIcons {...props} />;
}
