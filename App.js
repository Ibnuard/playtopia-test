import React from 'react';
import Main from './src';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const App = () => {
  return <Main />;
};

export default App;
