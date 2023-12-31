import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: Scaler.scaleSize(95),
    justifyContent: 'center',
  },
  childContainer: {
    padding: Size.SIZE_16,
    justifyContent: 'center',
  },
  cardBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  badge: {
    marginTop: Size.SIZE_8,
  },
  childLeft: {
    flex: 1,
  },

  largeCardContainer: {
    backgroundColor: Colors.PLAYCARD_BRONZE_CARD,
    padding: Scaler.scaleSize(20),
    height: Scaler.scaleSize(215),
    overflow: 'hidden',
    elevation: 8,
  },

  ornamentSmall: {
    position: 'absolute',
    right: 0,
    bottom: -20,
  },

  ornamentLarge: {
    position: 'absolute',
    left: -25,
    top: -80,
  },

  largeTopLeft: {
    flex: 1,
  },

  centerContainer: {
    marginBottom: Size.SIZE_14,
    marginTop: Size.SIZE_14,
  },

  largeBottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  badgeContainer: {
    paddingVertical: 8,
    width: Scaler.scaleSize(115),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },

  bottomRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },

  gap: {
    height: Scaler.scaleSize(54),
  },

  // large card theme
  largeBRONZE: {
    backgroundColor: Colors.PLAYCARD_BRONZE_CARD,
  },

  largeSILVER: {
    backgroundColor: Colors.PLAYCARD_SILVER_CARD,
  },

  largeGOLD: {
    backgroundColor: Colors.PLAYCARD_GOLD_CARD,
  },

  // text
  textPlayCount: {
    ...Typo.TypoStyle(12, Colors.COLOR_WHITE, 'normal', 'Nunito'),
    marginRight: Size.SIZE_10,
  },

  textPlayCountLarge: {
    ...Typo.TypoStyle(12, Colors.PLAYCARD_BRONZE_TEXT, 'normal', 'Nunito'),
  },

  textName: {
    ...Typo.TypoStyle(
      Size.FONT_18,
      Colors.PLAYCARD_BRONZE_TEXT,
      'normal',
      'Nunito',
    ),
  },

  textNumber: {
    ...Typo.TypoStyle('normal', Colors.COLOR_WHITE, 'bold', 'Nunito'),
  },

  textLockedDesc: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'normal', 'Nunito'),
    marginTop: Size.SIZE_10,
  },

  textLockedValue: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'bold', 'Nunito'),
  },
});

export default styles;
