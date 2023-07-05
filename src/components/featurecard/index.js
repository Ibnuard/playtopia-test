import {Image, Text, View} from 'react-native';
import React from 'react';
import OrnamentLarge from '../../../assets/svgs/ornamentLarge';
import OrnamentSmall from '../../../assets/svgs/ornamentSmall';
import {getColorByMode} from '../../utils/utils';
import styles from './styles';
import Row from '../row';
import {IMAGES_RES} from '../../utils/images';

const FeatureCard = ({data}) => {
  // handle theme color
  const COLOR_THEME = getColorByMode(data?.type);

  return (
    <>
      <View
        style={[
          {backgroundColor: COLOR_THEME.feature},
          styles.containerLocked,
        ]}>
        <OrnamentLarge
          style={styles.ornamentLarge}
          color={COLOR_THEME.home_ornament}
        />
        <OrnamentSmall style={styles.ornamentSmall} color={COLOR_THEME.badge} />
        <Row style={styles.rowContainer}>
          <Text style={styles.textTitle}>Hola kuy</Text>
          <View style={styles.lockedContainer}></View>
        </Row>
      </View>
      <Image source={IMAGES_RES.lockIconDark} style={styles.lockIcon} />
    </>
  );
};

export default FeatureCard;
