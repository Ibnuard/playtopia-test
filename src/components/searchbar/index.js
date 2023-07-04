import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Row from '../row';
import {Colors} from '../../styles';
import {IMAGES_RES} from '../../utils/images';
import Touchable from '../touchable';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Row>
        <View style={styles.inputLeft}>
          <Icon name="search1" color={Colors.COLOR_DARK_GRAY} size={20} />
        </View>
        <TextInput
          placeholder="Test"
          placeholderTextColor={Colors.COLOR_DARK_GRAY}
          style={styles.input}
        />
        <Touchable>
          <Image source={IMAGES_RES.searchPlus} />
        </Touchable>
      </Row>
    </View>
  );
};

export default SearchBar;
