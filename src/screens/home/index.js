import * as React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './styles';
import {IMAGES_RES} from '../../utils/images';
import {
  AnimatedFlatList,
  Card,
  CityCard,
  Row,
  SearchBar,
} from '../../components';
import Touchable from '../../components/touchable';

const HomeScreen = () => {
  const TEST_CITY = [1, 2, 3, 4, 5, 6, 7];

  // render background
  const _renderBackground = () => {
    return (
      <View style={styles.imgBackground}>
        <Image source={IMAGES_RES.homeBackground} />
      </View>
    );
  };

  // render top container
  const _renderTopContainer = () => {
    return (
      <View style={styles.topContainer}>
        <Row>
          <View style={styles.topNameContainer}>
            <Text>Hi</Text>
            <Text>Camerun William</Text>
          </View>
          <Touchable>
            <Image source={IMAGES_RES.notifIcon} style={styles.topNotifIcon} />
          </Touchable>
        </Row>
      </View>
    );
  };

  // render top container
  const _renderCardContainer = () => {
    return (
      <View style={styles.cardContainer}>
        <Card type="shadow">
          <Row>
            <View style={styles.cardStat}>
              <Image
                source={IMAGES_RES.cardGradient.cardBlueLeft}
                style={styles.cardGradient}
                resizeMode={'stretch'}
              />
              <Text>295 XP lagi jadi playover</Text>
              <Image
                source={IMAGES_RES.progressBar}
                style={styles.cardProgressBar}
              />
            </View>
            <View style={styles.cardStat}>
              <Image
                source={IMAGES_RES.cardGradient.cardPinkRight}
                style={styles.cardGradient}
                resizeMode={'stretch'}
              />
              <Row>
                <Image source={IMAGES_RES.badge} />
                <View style={styles.cardRightCenterChild}>
                  <Text>PLAY MILES</Text>
                  <Text>50000</Text>
                </View>
                <Image source={IMAGES_RES.arrow.pink_right} />
              </Row>
            </View>
          </Row>
          <Text>Mau main dimana?</Text>
          <SearchBar />
          <Row>
            <View style={styles.divider} />
            <Text>atau</Text>
            <View style={styles.divider} />
          </Row>
          <AnimatedFlatList
            horizontal
            data={TEST_CITY}
            renderItem={({item, index}) => <CityCard />}
          />
        </Card>
      </View>
    );
  };

  // main render
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      {_renderBackground()}
      {_renderTopContainer()}
      {_renderCardContainer()}
    </View>
  );
};

export default HomeScreen;
