import * as React from 'react';
import {View, Text, Image, StatusBar, FlatList} from 'react-native';
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
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {
  const TEST_CITY = [1, 2, 3, 4, 5, 6, 7];

  const carouselRef = React.useRef(null);

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
            <Text style={styles.textHi}>Hi</Text>
            <Text style={styles.textName}>Cameron Williamson</Text>
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
          <Row style={styles.cardStats}>
            <View style={styles.cardStat}>
              <Image
                source={IMAGES_RES.cardGradient.cardBlueLeft}
                style={styles.cardGradient}
                resizeMode={'stretch'}
              />
              <Text style={styles.textStatLeftDesc}>
                <Text style={styles.textStatLeftPoint}>295 XP</Text> lagi jadi
                playover
              </Text>
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
                  <Text style={styles.textStatRightTitle}>PLAY MILES</Text>
                  <Text style={styles.textStatRightPoint}>50000</Text>
                </View>
                <Image source={IMAGES_RES.arrow.pink_right} />
              </Row>
            </View>
          </Row>
          <Text style={styles.textCardQuestion}>Mau main dimana?</Text>
          <SearchBar
            placeholder={'Cari Lokasi Bermain'}
            containerStyle={styles.searchBar}
          />
          <Row style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.textOrDivider}>atau</Text>
            <View style={styles.divider} />
          </Row>
          <AnimatedFlatList
            containerStyle={styles.cityListContainer}
            horizontal
            data={TEST_CITY}
            renderItem={({item, index}) => <CityCard />}
          />
        </Card>
      </View>
    );
  };

  const data_car = [1, 2];

  function test({item, index}) {
    return (
      <View>
        <Image source={IMAGES_RES.banner} />
      </View>
    );
  }

  // render promo and info
  const _renderPromoInfo = () => {
    return (
      <View style={styles.infopromoContainer}>
        <Text style={styles.textSubtitle}>Info & Promo</Text>
        <Carousel
          ref={carouselRef}
          data={data_car}
          renderItem={test}
          sliderWidth={300}
          itemWidth={300}
        />
      </View>
    );
  };

  // main render
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      {_renderBackground()}
      {_renderTopContainer()}
      {_renderCardContainer()}
      {_renderPromoInfo()}
    </View>
  );
};

export default HomeScreen;
