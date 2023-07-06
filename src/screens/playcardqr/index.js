import {Image, StatusBar, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import {BackButton, Button, Card, LevelCard} from '../../components';
import {Colors} from '../../styles';
import {IMAGES_RES} from '../../utils/images';
import {useSelector} from 'react-redux';
import {selectUser} from '../../store/slices/userSlice';

const PlayCardQRScreen = ({navigation}) => {
  // gte user data from redux
  const {userData} = useSelector(selectUser);
  // show exit button on header
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerLeft: () => (
          <BackButton type="exit" onPress={() => navigation.goBack()} />
        ),
        headerStyle: {
          backgroundColor: Colors.PLAYCARD_BRONZE_CARD_DARK,
        },
      });
    }, []),
  );

  // render content
  const _renderContent = () => {
    return (
      <View
        style={[
          styles.contentContainer,
          {backgroundColor: Colors.PLAYCARD_BRONZE},
        ]}>
        <Card style={styles.cardContainer}>
          <Text style={styles.textTitle}>QR code kamu sudah siap</Text>
          <Text style={styles.textSubtitle}>
            Pindai untuk mengumpulkan PLAYMILES
          </Text>
          <Image source={IMAGES_RES.exampleQR} />
        </Card>
        <LevelCard style={styles.levelCard} type="large" user={userData} />
        {_renderBottomContainer()}
      </View>
    );
  };

  // render botttom container
  const _renderBottomContainer = () => {
    return (
      <View style={styles.bottomContainer}>
        <Button
          invert
          title="Lihat PLAYCARD"
          buttonStyle={styles.bottomButton}
          textStyle={styles.textButton}
          onPress={() => navigation.navigate('PlayCard')}
        />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: Colors.PLAYCARD_BRONZE_CARD_DARK},
      ]}>
      <StatusBar barStyle={'light-content'} />
      {_renderContent()}
    </View>
  );
};

export default PlayCardQRScreen;
