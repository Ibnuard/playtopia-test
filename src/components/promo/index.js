import {Image, Text, View} from 'react-native';
import React from 'react';
import {IMAGES_RES} from '../../utils/images';
import Touchable from '../touchable';
import styles from './styles';

const PromoItem = () => {
  return (
    <Touchable style={styles.container}>
      <Image source={IMAGES_RES.banner} />
    </Touchable>
  );
};

export default PromoItem;
