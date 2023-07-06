import {Image, Text, View} from 'react-native';
import React from 'react';
import Card from '../card';
import Row from '../row';
import {IMAGES_RES} from '../../utils/images';
import styles from './styles';
import {formatRupiah} from '../../utils/utils';

const InfoLevelCard = ({activeMode, level, user}) => {
  // user's point
  const USER_POINT = user?.point;

  // target level point
  const TARGET_LEVEL_POINT = level[activeMode + 1].point;

  // distance point
  const DISTANCE_POINT = TARGET_LEVEL_POINT - USER_POINT;
  return (
    <Card style={styles.cardContainer}>
      <Row style={styles.topContainer}>
        <Image source={IMAGES_RES.rpIcon} style={styles.rpIcon} />
        <Text style={styles.textLightNormal}>
          Lakukan transaksi{' '}
          <Text style={styles.textLightBold}>
            {formatRupiah(DISTANCE_POINT)}
          </Text>{' '}
          untuk jadi{' '}
          <Text style={styles.textLightBold}>
            {level[activeMode + 1].title}
          </Text>
        </Text>
      </Row>
      <View style={styles.bottomContainer}>
        <Text style={styles.textDarkNormal}>
          Yuk bermain untuk jadi{' '}
          <Text style={styles.textDarkBold}>{level[activeMode + 1].title}</Text>{' '}
          dengan tanggal
          <Text style={styles.textDarkBold}> 31 Des 2023</Text>
        </Text>
      </View>
    </Card>
  );
};

export default InfoLevelCard;
