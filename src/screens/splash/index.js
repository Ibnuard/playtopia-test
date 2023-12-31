import * as React from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../../context';
import {retrieveData} from '../../utils/store';
import {wait} from '../../utils/utils';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {setRestoreToken} from '../../store/slices/userSlice';

const SplashScreen = () => {
  // call redux dispatch
  const dispatch = useDispatch();
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await retrieveData('token', false);
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch(setRestoreToken({token: userToken}));
    };
    wait(2500).then(() => bootstrapAsync());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Playtopia Test</Text>
    </View>
  );
};

export default SplashScreen;
