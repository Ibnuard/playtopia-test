import {Image, Text, View} from 'react-native';
import React from 'react';
import Card from '../card';
import Row from '../row';
import {IMAGES_RES} from '../../utils/images';
import styles from './styles';

const InfoLevelCard = () => {
  return (
    <Card style={styles.cardContainer}>
      <Row style={styles.topContainer}>
        <Image source={IMAGES_RES.rpIcon} style={styles.rpIcon} />
        <Text style={styles.textLightNormal}>
          Lakukan transaksi <Text style={styles.textLightBold}>50000</Text>{' '}
          untuk jadi <Text style={styles.textLightBold}>Silver</Text>
        </Text>
      </Row>
      <View style={styles.bottomContainer}>
        <Text style={styles.textDarkNormal}>
          Yuk bermain untuk jadi <Text style={styles.textDarkBold}>Silver</Text>{' '}
          dengan tanggal
          <Text style={styles.textDarkBold}> 31 Des 2022</Text>
        </Text>
      </View>
    </Card>
  );
};

export default InfoLevelCard;
