import {Dimensions, Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import {
  AnimatedFlatList,
  BackButton,
  FeatureCard,
  InfoLevelCard,
  LevelCard,
} from '../../components';
import StarBackground from '../../../assets/svgs/starBg';
import {getColorByMode} from '../../utils/utils';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from '../../store/slices/userSlice';

const PlayCardScreen = ({navigation}) => {
  const [currentMode, setCurrentMode] = React.useState('BRONZE');
  const [activeSlide, setActiveSlide] = React.useState(0);

  // animated flatlist var
  const {width} = Dimensions.get('window');
  const carousel = React.useRef(null);

  // theme var
  const COLOR_THEME = getColorByMode(currentMode);

  // get user data drom redux
  const {userData} = useSelector(selectUser);

  // test member
  const LEVEL_LIST = [
    {
      type: 'BRONZE',
      point: 1000,
      title: 'Bronze',
    },
    {
      type: 'SILVER',
      point: 5000,
      title: 'Silver',
    },
    {
      type: 'SILVER',
      point: 10000,
      title: 'Gold',
    },
  ];

  // example feature
  const FEATURE_LIST = {
    BRONZE: ['Earn 1.2x PLAYMILES more', '5% Discount for Chuwi beverages'],
    SILVER: [
      'Level up bonus 15,000 PLAYMILES',
      'Earn 1.5x PLAYMILES more',
      '20% bonus balance for Amazone Topup',
    ],
  };

  // set back button
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      });

      return () => null;
    }, []),
  );

  // render dynamic bg
  const _renderDynamicBackground = () => {
    return (
      <View style={styles.starBg}>
        <StarBackground color={COLOR_THEME.home_ornament} />
      </View>
    );
  };

  // render top container
  const _renderTopContainer = () => {
    // calculatre padding to centering card
    const divide = width / (LEVEL_LIST.length + 3);

    return (
      <View>
        <Text style={styles.textTitle}>PLAYCARD</Text>
        <Carousel
          ref={carousel}
          data={LEVEL_LIST}
          layout="default"
          renderItem={({item, index}) => (
            <LevelCard type="large" data={item} user={userData} />
          )}
          sliderWidth={width - 10}
          itemWidth={width - divide}
          onSnapToItem={index => {
            setCurrentMode(LEVEL_LIST[index].type);
            setActiveSlide(index);
          }}
        />
        <Pagination
          dotsLength={LEVEL_LIST.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.pagination}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dotActive}
          inactiveDotStyle={styles.dotInactive}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };

  // render info card
  const _renderInfoCardContainer = () => {
    return (
      <View style={styles.infoContainer}>
        <InfoLevelCard
          activeMode={activeSlide}
          level={LEVEL_LIST}
          user={userData}
        />
      </View>
    );
  };

  // render bottom container
  const _renderFeatureContainer = () => {
    return (
      <View style={styles.featureContainer}>
        <Text style={styles.textSubtitle}>
          Keuntungan {LEVEL_LIST[activeSlide].title} Member
        </Text>
        {FEATURE_LIST[currentMode].map((item, index) => {
          return (
            <FeatureCard
              key={item + index}
              title={item}
              isLocked={false}
              type={currentMode}
            />
          );
        })}
      </View>
    );
  };

  // main render
  return (
    <View style={[styles.container, styles[`bg${currentMode}`]]}>
      {_renderDynamicBackground()}
      <ScrollView>
        {_renderTopContainer()}
        {_renderInfoCardContainer()}
        {_renderFeatureContainer()}
      </ScrollView>
    </View>
  );
};

export default PlayCardScreen;
