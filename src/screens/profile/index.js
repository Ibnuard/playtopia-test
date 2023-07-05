import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {ProfileCard} from '../../components';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileCard />
    </View>
  );
};

export default ProfileScreen;
