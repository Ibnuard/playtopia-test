import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Card from '../card';
import Touchable from '../touchable';
import Row from '../row';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../styles';

const ProfileCard = ({user}) => {
  return (
    <View style={styles}>
      <Card style={styles.cardContainer} type="border">
        <View style={styles.childTop}>
          <Text style={styles.textName}>{user.name}</Text>
          <Touchable style={styles.detailButton}>
            <Text style={styles.textDetailButton}>Lihat detail</Text>
          </Touchable>
        </View>

        <Touchable style={styles.childBottom}>
          <Row>
            <View style={styles.bottomLeftChild}>
              <Text style={styles.textChildTitle}>My Kids</Text>
              <Text style={styles.textChildCount}>
                {user.childs.length} anak
              </Text>
            </View>
            <Icon
              name="chevron-small-right"
              color={Colors.COLOR_DARK_GRAY}
              size={24}
            />
          </Row>
        </Touchable>
      </Card>
    </View>
  );
};

export default ProfileCard;
