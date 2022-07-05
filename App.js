import React from 'react';

import {
  SafeAreaView,
  Dimensions
} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';


const App = () => {
  return (
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
  );
};

export default App;
