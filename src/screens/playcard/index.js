import {Dimensions, Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import {AnimatedFlatList, BackButton, LevelCard} from '../../components';
import StarBackground from '../../../assets/svgs/starBg';
import {getColorByMode} from '../../utils/utils';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const PlayCardScreen = ({navigation}) => {
  const [currentMode, setCurrentMode] = React.useState('BRONZE');
  const [activeSlide, setActiveSlide] = React.useState(0);

  // animated flatlist var
  const {width} = Dimensions.get('window');
  const carousel = React.useRef(null);

  // theme var
  const COLOR_THEME = getColorByMode(currentMode);

  // test member
  const TEST = [
    {
      type: 'BRONZE',
      point: 1000,
    },
    {
      type: 'SILVER',
      point: 10000,
    },
    {
      type: 'SILVER',
      point: 10000,
    },
  ];

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
    const divide = width / (TEST.length + 3);

    return (
      <View>
        <Text style={styles.textTitle}>PLAYCARD</Text>
        <Carousel
          ref={carousel}
          data={TEST}
          layout="default"
          renderItem={({item, index}) => <LevelCard type="large" data={item} />}
          sliderWidth={width - 10}
          itemWidth={width - divide}
          onSnapToItem={index => {
            setCurrentMode(TEST[index].type);
            setActiveSlide(index);
          }}
        />
        <Pagination
          dotsLength={TEST.length}
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

  return (
    <View style={[styles.container, styles[`bg${currentMode}`]]}>
      {_renderDynamicBackground()}
      {_renderTopContainer()}
    </View>
  );
};

export default PlayCardScreen;
