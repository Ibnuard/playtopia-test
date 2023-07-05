import {Dimensions, Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import {AnimatedFlatList, BackButton, LevelCard} from '../../components';
import StarBackground from '../../../assets/svgs/starBg';
import {getColorByMode} from '../../utils/utils';

const PlayCardScreen = ({navigation}) => {
  const [currentMode, setCurrentMode] = React.useState('BRONZE');

  // animated flatlist var
  const {width} = Dimensions.get('window');

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
        <StarBackground color={COLOR_THEME} />
      </View>
    );
  };

  // render top container
  const _renderTopContainer = () => {
    return (
      <>
        <Text style={styles.textTitle}>PLAYCARD</Text>
        <AnimatedFlatList
          horizontal
          data={TEST}
          pagingEnabled
          indicator={'dot'}
          onActiveIndex={index => setCurrentMode(TEST[index].type)}
          renderItem={({item, index}) => (
            <LevelCard
              type="large"
              style={{width: width - 52, marginLeft: 8}}
            />
          )}
        />
      </>
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
