import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {GradientButton, ProfileCard} from '../../components';

const ProfileScreen = () => {
  // render top container || profile card
  const _renderProfileCard = () => {
    return (
      <>
        <ProfileCard />
      </>
    );
  };

  // render membership
  const _renderMembership = () => {
    return (
      <View>
        <Text style={styles.textSubtitle}>Membership</Text>
        <GradientButton />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {_renderProfileCard()}
      {_renderMembership()}
    </View>
  );
};

export default ProfileScreen;
