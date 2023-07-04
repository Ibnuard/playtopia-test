import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const CityCard = () => {
  return (
    <View style={styles.container}>
      <Image source={null} style={styles.icon} resizeMode={'contain'} />
      <Text style={styles.textTitle}>Jakarta</Text>
    </View>
  );
};

export default CityCard;
