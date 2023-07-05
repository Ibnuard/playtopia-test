import {Image, Text, View} from 'react-native';
import React from 'react';
import {IMAGES_RES} from '../../utils/images';
import styles from './styles';
import Row from '../row';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../styles';

const VoucherCard = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={IMAGES_RES.voucherBackground}
        style={styles.cardBackground}
        resizeMode={'stretch'}
      />
      <View style={styles.childContainer}>
        <Row>
          <Row style={styles.childLeft}>
            <Image source={IMAGES_RES.voucherIcon} />
            <Text style={styles.textVoucherAvailable}>
              Lihat voucher yang tersedia
            </Text>
          </Row>

          <Icon
            name="chevron-small-right"
            color={Colors.COLOR_WHITE}
            size={24}
          />
        </Row>
      </View>
    </View>
  );
};

export default VoucherCard;
