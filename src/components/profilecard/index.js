import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Card from '../card';
import Touchable from '../touchable';
import Row from '../row';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../styles';

const ProfileCard = () => {
  return (
    <View style={styles}>
      <Card style={styles.cardContainer} type="border">
        <View style={styles.childTop}>
          <Text style={styles.textName}>Hola</Text>
          <Touchable style={styles.detailButton}>
            <Text style={styles.textDetailButton}>Lihat detail</Text>
          </Touchable>
        </View>

        <View style={styles.childBottom}>
          <Row>
            <View style={styles.bottomLeftChild}>
              <Text style={styles.textChildTitle}>Title</Text>
              <Text style={styles.textChildCount}>Child count</Text>
            </View>
            <Icon name="right" color={Colors.COLOR_DARK_GRAY} size={20} />
          </Row>
        </View>
      </Card>
    </View>
  );
};

export default ProfileCard;
