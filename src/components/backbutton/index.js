import {Image, Text, View} from 'react-native';
import React from 'react';
import Touchable from '../touchable';
import {IMAGES_RES} from '../../utils/images';
import styles from './styles';

const BackButton = ({onPress, type = 'back'}) => {
  return (
    <Touchable onPress={onPress}>
      <Image source={IMAGES_RES.button[type]} style={styles.button} />
    </Touchable>
  );
};

export default BackButton;
