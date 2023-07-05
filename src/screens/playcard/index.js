import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import {BackButton} from '../../components';
import {IMAGES_RES} from '../../utils/images';
import StarBackground from '../../../assets/svgs/starBg';

const PlayCardScreen = ({navigation}) => {
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
        <StarBackground />
      </View>
    );
  };

  return (
    <View style={[styles.container, styles.bgBronze]}>
      {_renderDynamicBackground()}
      <Text>PlayCardScreen</Text>
    </View>
  );
};

export default PlayCardScreen;
