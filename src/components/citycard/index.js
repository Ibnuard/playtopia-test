import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES_RES} from '../../utils/images';

const CityCard = ({data, loading}) => {
  const {name} = data;
  return (
    <View style={styles.container}>
      <Image
        source={loading ? null : IMAGES_RES.exampleCity}
        style={styles.icon}
        resizeMode={'contain'}
      />
      {!loading && <Text style={styles.textTitle}>{name}</Text>}
    </View>
  );
};

export default CityCard;
