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

  cardStats: {
    marginBottom: Size.SIZE_16,
  },

  searchBar: {
    marginVertical: Size.SIZE_12,
  },

  dividerContainer: {
    paddingVertical: 4,
  },

  divider: {
    flex: 1,
    height: 1,
    marginHorizontal: 4,
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
  },

  cityListContainer: {
    marginTop: Size.SIZE_12,
  },

  infopromoContainer: {
    marginTop: Scaler.scaleSize(32),
  },

  promoListContainer: {
    marginTop: Size.SIZE_12,
  },

  scrollContainer: {
    paddingBottom: Scaler.scaleSize(60),
  },

  // text styles

  textHi: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLUE, 'bold', 'Nunito'),
  },

  textName: {
    ...Typo.TypoStyle('medium', Colors.COLOR_BLUE, 'bold'),
  },

  textStatLeftPoint: {
    ...Typo.TypoStyle(12, Colors.COLOR_BLUE, 'bold', 'Nunito'),
  },

  textStatLeftDesc: {
    ...Typo.TypoStyle(12, Colors.COLOR_BLUE, 'normal', 'Nunito'),
  },

  textStatRightTitle: {
    ...Typo.TypoStyle(12, Colors.COLOR_PINK, 'normal', 'Nunito'),
  },

  textStatRightPoint: {
    ...Typo.TypoStyle('normal', Colors.COLOR_PINK, 'bold', 'Nunito'),
  },

  textCardQuestion: {
    ...Typo.TypoStyle(20, Colors.COLOR_BLUE, 'bold'),
    textAlign: 'center',
  },

  textOrDivider: {
    ...Typo.TypoStyle('normal', Colors.COLOR_DARK_GRAY, 'bold', 'Nunito'),
    paddingHorizontal: Size.SIZE_10,
  },

  textSubtitle: {
    ...Typo.TypoStyle(20, Colors.COLOR_BLUE, 'bold'),
  },
});

export default styles;
