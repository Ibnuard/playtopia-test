import {Image, Text, View} from 'react-native';
import React from 'react';
import OrnamentLarge from '../../../assets/svgs/ornamentLarge';
import OrnamentSmall from '../../../assets/svgs/ornamentSmall';
import {getColorByMode} from '../../utils/utils';
import styles from './styles';
import Row from '../row';
import {IMAGES_RES} from '../../utils/images';

const FeatureCard = ({type, title, isLocked}) => {
  // handle theme color
  const COLOR_THEME = getColorByMode(type);

  return (
    <View style={styles.parent}>
      <View
        style={[
          {backgroundColor: COLOR_THEME.feature},
          styles[`container${isLocked ? 'Locked' : ''}`],
        ]}>
        <OrnamentLarge
          style={styles.ornamentLarge}
          color={COLOR_THEME.home_ornament}
        />
        <OrnamentSmall style={styles.ornamentSmall} color={COLOR_THEME.badge} />
        <Row style={styles.rowContainer}>
          <Text style={styles.textTitle}>{title}</Text>
          <View style={styles.lockedContainer} />
        </Row>
      </View>
      <Image source={IMAGES_RES.lockIconDark} style={styles.lockIcon} />
    </View>
  );
};

export default FeatureCard;
