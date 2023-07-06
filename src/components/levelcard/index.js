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
import {formatRupiah, getColorByMode} from '../../utils/utils';

const LevelCard = ({style, type = 'small', onPress, data, user, level}) => {
  // handle theme color
  const COLOR_THEME = getColorByMode(data?.type);

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
              <Image source={IMAGES_RES.badge['BRONZE']} style={styles.badge} />
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
    // LARGE VARIABLE

    // user point
    const USER_POINT = user?.point;
    const LEVEL_POINT = level?.point;

    const IS_LOCKED = USER_POINT < LEVEL_POINT;

    const DISTANCE = LEVEL_POINT - USER_POINT;

    return (
      <Card
        style={[
          styles.largeCardContainer,
          style,
          styles[`large${data?.type}`],
        ]}>
        <OrnamentLarge
          style={styles.ornamentLarge}
          color={COLOR_THEME.home_ornament}
        />
        <OrnamentSmall style={styles.ornamentSmall} color={COLOR_THEME.badge} />
        <Row>
          <View style={styles.largeTopLeft}>
            <Image source={IMAGES_RES.badge[level?.type ?? 'BRONZE']} />
          </View>
          <Text style={[styles.textPlayCountLarge, {color: COLOR_THEME.text}]}>
            40 PLAYMILES
          </Text>
        </Row>
        {IS_LOCKED && (
          <View style={styles.centerContainer}>
            <Image source={IMAGES_RES.lockIcon} />
            <Text style={styles.textLockedDesc}>
              Lakukan transaksi{' '}
              <Text style={styles.textLockedValue}>
                {formatRupiah(DISTANCE)}
              </Text>{' '}
              lagi untuk menjadi {level.title} Member
            </Text>
          </View>
        )}
        <View style={styles.largeBottomContainer}>
          {!IS_LOCKED && (
            <Text style={[styles.textName, {color: COLOR_THEME.text}]}>
              {user?.name}
            </Text>
          )}
          <Row>
            {!IS_LOCKED && (
              <Text style={styles.textNumber}>{user?.number_id}</Text>
            )}
            <View style={styles.bottomRightContainer}>
              <View
                style={[
                  styles.badgeContainer,
                  {backgroundColor: COLOR_THEME.badge},
                ]}>
                <Image source={IMAGES_RES.playcardLogoTransparent} />
              </View>
            </View>
          </Row>
        </View>
      </Card>
    );
  };

  // main render
  return type == 'small' ? _renderSmallCard() : _renderLargeCard();
};

export default LevelCard;
