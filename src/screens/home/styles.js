import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
    paddingTop: Size.SIZE_24,
    paddingHorizontal: Size.SIZE_16,
  },

  imgBackground: {
    position: 'absolute',
    top: 0,
  },

  topContainer: {
    paddingVertical: Size.SIZE_14,
  },

  topNameContainer: {
    flex: 1,
  },

  topNotifIcon: {
    width: Scaler.scaleSize(28),
    height: Scaler.scaleSize(28),
    marginTop: 5,
  },

  cardContainer: {
    marginTop: Scaler.scaleSize(64),
  },

  cardStat: {
    flex: 1,
    height: Scaler.scaleSize(48),
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  cardProgressBar: {
    marginTop: 4,
  },

  cardRightCenterChild: {
    paddingHorizontal: Size.FONT_14,
  },

  divider: {
    flex: 1,
    height: 1,
    marginHorizontal: 4,
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
  },
});

export default styles;
