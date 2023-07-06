import * as React from 'react';
import {View, Text, Image, StatusBar, ScrollView} from 'react-native';
import styles from './styles';
import {IMAGES_RES} from '../../utils/images';
import {
  AnimatedFlatList,
  Card,
  CityCard,
  PromoItem,
  Row,
  SearchBar,
} from '../../components';
import Touchable from '../../components/touchable';
import {useQuery} from '@apollo/client';
import {ALL_CITIES_QUERY} from '../../api/queries';
import {useSelector} from 'react-redux';
import {selectUser} from '../../store/slices/userSlice';

const HomeScreen = ({navigation}) => {
  // fetch all cities
  const {loading, data} = useQuery(ALL_CITIES_QUERY);

  // get user data from redux
  const {userData} = useSelector(selectUser);

  // ======================================================
  //
  // ================= GAP ================================
  //
  // ======================================================

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
            <Text style={styles.textName}>{userData.name}</Text>
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
            onPress={() => navigation.navigate('Playground')}
          />
          <Row style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.textOrDivider}>atau</Text>
            <View style={styles.divider} />
          </Row>
          <AnimatedFlatList
            containerStyle={styles.cityListContainer}
            horizontal
            scrollEnabled={!loading}
            data={data ? data.allCities : [1, 2, 3, 4, 5, 6]}
            renderItem={({item, index}) => (
              <CityCard data={item} loading={loading} />
            )}
          />
        </Card>
      </View>
    );
  };

  const data_car = [1, 2];

  // render promo and info
  const _renderPromoInfo = () => {
    return (
      <View style={styles.infopromoContainer}>
        <Text style={styles.textSubtitle}>Info & Promo</Text>
        <AnimatedFlatList
          containerStyle={styles.promoListContainer}
          horizontal
          pagingEnabled
          data={data_car}
          indicator={'dot'}
          renderItem={({item, index}) => <PromoItem />}
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {_renderCardContainer()}
        {_renderPromoInfo()}
        {_renderPromoInfo()}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
