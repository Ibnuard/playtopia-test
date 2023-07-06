import React from 'react';
import Main from './src';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
