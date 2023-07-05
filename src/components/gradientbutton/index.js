import {Image, Text, View} from 'react-native';
import React from 'react';
import Touchable from '../touchable';
import {IMAGES_RES} from '../../utils/images';
import styles from './styles';
import Row from '../row';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../styles';

const GradientButton = ({style, color = 'pink'}) => {
  return (
    <Touchable style={[styles.container, style]}>
      <Image
        source={
          IMAGES_RES.cardGradient[
            `card${color == 'blue' ? 'BlueLeft' : 'PinkRight'}`
          ]
        }
        style={styles.imageGardient}
        resizeMode={'cover'}
      />
      <Row style={styles.child}>
        <View style={styles.badgeContainer}>
          <Image
            style={styles.badgeIcon}
            source={IMAGES_RES.playmilesLogo}
            resizeMode={'contain'}
          />
        </View>

        <Icon
          name="chevron-small-right"
          color={Colors.COLOR_DARK_GRAY}
          size={24}
        />
      </Row>
    </Touchable>
  );
};

export default GradientButton;
