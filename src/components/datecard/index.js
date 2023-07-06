import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Touchable from '../touchable';

const DateCard = ({onPress, data, isActive}) => {
  return (
    <Touchable
      style={styles[isActive ? 'containerActive' : `container`]}
      onPress={onPress}>
      <Text style={styles[isActive ? `textactive` : `textnormal`]}>
        {data.title}
      </Text>
      <Text style={styles[isActive ? `textDateactive` : `textDatenormal`]}>
        {data.date}
      </Text>
    </Touchable>
  );
};

export default DateCard;
