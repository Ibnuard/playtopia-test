import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES_RES} from '../../utils/images';
import Touchable from '../touchable';

const CityCard = ({data, loading, type = '', onPress}) => {
  const {name} = data;
  return (
    <Touchable style={styles[`container${type}`]} onPress={onPress}>
      <Image
        source={loading ? null : IMAGES_RES.exampleCity}
        style={styles[`icon${type}`]}
        resizeMode={'contain'}
      />
      {!loading && <Text style={styles[`textTitle${type}`]}>{name}</Text>}
    </Touchable>
  );
};

export default CityCard;
