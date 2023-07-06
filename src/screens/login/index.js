import * as React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components';
import {AuthContext} from '../../context';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {setSignIn} from '../../store/slices/userSlice';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const SAMPLE_USER = {
    BRONZE: {
      name: 'Naura Hasna',
      number_id: 123456,
      point: 1000,
      token: '1234token',
    },
  };

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        title="Go to main screen kuy"
        upperCase={false}
        isLoading={false}
        disabled={false}
        onPress={() => dispatch(setSignIn({user: SAMPLE_USER['BRONZE']}))}
      />
    </View>
  );
};

export default LoginScreen;
