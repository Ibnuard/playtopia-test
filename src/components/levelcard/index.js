import {Image, Text, View} from 'react-native';
import React from 'react';
import {IMAGES_RES} from '../../utils/images';
import styles from './styles';
import Row from '../row';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../styles';
import Touchable from '../touchable';

const LevelCard = ({style, onPress}) => {
  return (
    <Touchable style={[styles.container, style]} onPress={onPress}>
      <Image
        source={IMAGES_RES.bronzeCard}
        style={styles.cardBackground}
        resizeMode={'stretch'}
      />
      <View style={styles.childContainer}>
        <Row>
          <View style={styles.childLeft}>
            <Image source={IMAGES_RES.playcardLogo} />
            <Image source={IMAGES_RES.bronzeBadge} style={styles.badge} />
          </View>
          <Row>
            <Text style={styles.textPlayCount}>40 PLAYMILES</Text>
            <Icon
              name="chevron-small-right"
              color={Colors.COLOR_WHITE}
              size={24}
            />
          </Row>
        </Row>
      </View>
    </Touchable>
  );
};

export default LevelCard;
