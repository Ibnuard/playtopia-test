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
  const TARGET_LEVEL = level[activeMode + 1];

  // current level point
  const CURRENT_LEVEL_POINT = level[activeMode].point;

  // distance point
  const DISTANCE_POINT = TARGET_LEVEL?.point - USER_POINT;

  if (!TARGET_LEVEL || USER_POINT < CURRENT_LEVEL_POINT) {
    return null;
  }
  return (
    <Card style={styles.cardContainer}>
      <Row style={styles.topContainer}>
        <Image source={IMAGES_RES.rpIcon} style={styles.rpIcon} />
        <Text style={styles.textLightNormal}>
          Lakukan transaksi{' '}
          <Text style={styles.textLightBold}>
            {formatRupiah(DISTANCE_POINT)}
          </Text>{' '}
          lagi untuk naik level menjadi{' '}
          <Text style={styles.textLightBold}>{TARGET_LEVEL?.title} Member</Text>
        </Text>
      </Row>
      <View style={styles.bottomContainer}>
        <Text style={styles.textDarkNormal}>
          Yuk bermain lebih banyak unutk jadi{' '}
          <Text style={styles.textDarkBold}>Member {TARGET_LEVEL?.title}</Text>{' '}
          dengan cara selesaikan progress di bawah sebelum
          <Text style={styles.textDarkBold}> 31 Des 2023</Text>
        </Text>
      </View>
    </Card>
  );
};

export default InfoLevelCard;
