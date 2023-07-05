import {Image, Text, View} from 'react-native';
import React from 'react';
import {IMAGES_RES} from '../../utils/images';
import styles from './styles';
import Row from '../row';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../styles';
import Touchable from '../touchable';
import Card from '../card';
import OrnamentSmall from '../../../assets/svgs/ornamentSmall';
import OrnamentLarge from '../../../assets/svgs/ornamentLarge';

const LevelCard = ({style, type = 'small', onPress}) => {
  // render small card
  const _renderSmallCard = () => {
    return (
      <Touchable style={[styles.container, style]} onPress={onPress}>
        <Image
          source={IMAGES_RES.bronzeCard}
          style={styles.cardBackground}
          resizeMode={'stretch'}
        />
        <View style={styles.childContainer}>
          <Row>
            <View style={styles.childLeft}>
              <Image source={IMAGES_RES.playcardLogo} />
              <Image source={IMAGES_RES.bronzeBadge} style={styles.badge} />
            </View>
            <Row>
              <Text style={styles.textPlayCount}>40 PLAYMILES</Text>
              <Icon
                name="chevron-small-right"
                color={Colors.COLOR_WHITE}
                size={24}
              />
            </Row>
          </Row>
        </View>
      </Touchable>
    );
  };

  // render large card
  const _renderLargeCard = () => {
    return (
      <Card style={styles.largeCardContainer}>
        <OrnamentLarge style={styles.ornamentLarge} />
        <OrnamentSmall style={styles.ornamentSmall} />
        <Row>
          <View style={styles.largeTopLeft}>
            <Image source={IMAGES_RES.bronzeBadge} />
          </View>
          <Text style={styles.textPlayCountLarge}>40 PLAYMILES</Text>
        </Row>
        <View style={styles.centerContainer}>
          <Image source={IMAGES_RES.lockIcon} />
          <Text style={styles.textLockedDesc}>
            Transaksi <Text style={styles.textLockedValue}>10000</Text> kurang
          </Text>
        </View>
        <Text style={styles.textName}>Nama</Text>
        <Row>
          <Text style={styles.textNumber}>123456</Text>
          <View style={styles.bottomRightContainer}>
            <View style={styles.badgeContainer}>
              <Image source={IMAGES_RES.playcardLogoTransparent} />
            </View>
          </View>
        </Row>
      </Card>
    );
  };

  // main render
  return type == 'small' ? _renderSmallCard() : _renderLargeCard();
};

export default LevelCard;
