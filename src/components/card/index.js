import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Card = ({children, type = 'shadow', style}) => {
  return <View style={[styles[`container_${type}`], style]}>{children}</View>;
};

export default Card;
