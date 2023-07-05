import * as React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import {
  GradientButton,
  LevelCard,
  ProfileCard,
  Row,
  VoucherCard,
} from '../../components';
import {IMAGES_RES} from '../../utils/images';
import Touchable from '../../components/touchable';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../styles';

const ProfileScreen = ({navigation}) => {
  // config other menus
  const OTHER_MENU = [
    {
      title: 'Keamanan',
      icon: IMAGES_RES.profileIcon.security,
    },
    {
      title: 'Notifikasi',
      icon: IMAGES_RES.profileIcon.notification,
    },
    {
      title: 'Pusat Bantuan',
      icon: IMAGES_RES.profileIcon.help,
    },
    {
      title: 'Lainnya',
      icon: IMAGES_RES.profileIcon.other,
    },
  ];

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
        <LevelCard
          style={styles.levelCard}
          onPress={() => navigation.navigate('PlayCard')}
        />
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

  // render other menus
  const _renderOther = () => {
    return (
      <View>
        <Text style={styles.textSubtitle}>Menu Lainnya</Text>
        {OTHER_MENU.map((item, index) => {
          return (
            <Touchable style={styles.otherButton}>
              <Row>
                <Row style={styles.otherButtonLeft}>
                  <Image source={item.icon} />
                  <Text style={styles.textButtonMenu}>{item.title}</Text>
                </Row>
                <Icon
                  name="chevron-small-right"
                  color={Colors.COLOR_DARK_GRAY}
                  size={24}
                />
              </Row>
            </Touchable>
          );
        })}
        <Touchable style={styles.logoutButton}>
          <Text style={styles.textButtonLogout}>Keluar</Text>
        </Touchable>
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      {_renderProfileCard()}
      {_renderMembership()}
      {_renderVoucher()}
      {_renderOther()}
    </ScrollView>
  );
};

export default ProfileScreen;
