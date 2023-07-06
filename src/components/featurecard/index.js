import {Image, Text, View} from 'react-native';
import React from 'react';
import OrnamentLarge from '../../../assets/svgs/ornamentLarge';
import OrnamentSmall from '../../../assets/svgs/ornamentSmall';
import {getColorByMode} from '../../utils/utils';
import styles from './styles';
import Row from '../row';
import {IMAGES_RES} from '../../utils/images';

const FeatureCard = ({type, title, activeMode, user, level}) => {
  // handle theme color
  const COLOR_THEME = getColorByMode(type);

  // user's point
  const USER_POINT = user.point;

  // target point
  const TARGET_POINT = level[activeMode].point;

  // is locked
  const IS_LOCKED = USER_POINT < TARGET_POINT;

  return (
    <View style={styles.parent}>
      <View
        style={[
          {backgroundColor: COLOR_THEME.feature},
          styles[`container${IS_LOCKED ? 'Locked' : ''}`],
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
      {IS_LOCKED && (
        <Image source={IMAGES_RES.lockIconDark} style={styles.lockIcon} />
      )}
    </View>
  );
};

export default FeatureCard;
