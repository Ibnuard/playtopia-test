import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

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
    overflow: 'hidden',
  },

  ornamentSmall: {
    position: 'absolute',
    right: 0,
  },

  ornamentLarge: {
    position: 'absolute',
    left: -25,
    top: -80,
  },

  // text
  textPlayCount: {
    ...Typo.TypoStyle(12, Colors.COLOR_WHITE, 'normal', 'Nunito'),
    marginRight: Size.SIZE_10,
  },
});

export default styles;
