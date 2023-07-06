import * as React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components';
import {AuthContext} from '../../context';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        title="Go to main screen kuy"
        upperCase={false}
        isLoading={false}
        disabled={false}
        onPress={() => signIn()}
      />
    </View>
  );
};

export default LoginScreen;
