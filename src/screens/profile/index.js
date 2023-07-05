import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {
  GradientButton,
  LevelCard,
  ProfileCard,
  VoucherCard,
} from '../../components';

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
        <LevelCard />
      </View>
    );
  };

  // render voucher
  const _renderVoucher = () => {
    return (
      <View>
        <Text style={styles.textSubtitle}>Voucher</Text>
        <VoucherCard />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {_renderProfileCard()}
      {_renderMembership()}
      {_renderVoucher()}
    </View>
  );
};

export default ProfileScreen;
