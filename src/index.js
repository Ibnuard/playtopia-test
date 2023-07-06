import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackScreen, MainScreen, SplashStack} from './navigator';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {BASE_URL} from './api/api';
import {useSelector} from 'react-redux';
import {selectUser} from './store/slices/userSlice';

const App = () => {
  // API Utils

  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache(),
  });

  // get current state from redux
  const {token, loading} = useSelector(selectUser);

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        {loading ? (
          <SplashStack />
        ) : token == null ? (
          <AuthStackScreen />
        ) : (
          <MainScreen />
        )}
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
