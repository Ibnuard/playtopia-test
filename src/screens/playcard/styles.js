import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Scaler.scaleSize(108),
  },

  bgBRONZE: {
    backgroundColor: Colors.PLAYCARD_BRONZE,
  },

  bgSILVER: {
    backgroundColor: Colors.PLAYCARD_SILVER,
  },

  starBg: {
    position: 'absolute',
    right: -100,
    top: -100,
  },

  pagination: {
    padding: 0,
    marginTop: -10,
  },

  dotContainer: {
    marginHorizontal: 2,
  },

  dotActive: {
    width: Size.SIZE_18,
    height: Size.SIZE_10,
    borderRadius: 5,
    backgroundColor: Colors.COLOR_DARK_GRAY,
  },

  dotInactive: {
    width: Size.SIZE_10,
    height: Size.SIZE_10,
    borderRadius: 5,
    backgroundColor: Colors.COLOR_WHITE,
  },

  infoContainer: {
    paddingHorizontal: Size.SIZE_16,
  },

  featureContainer: {
    padding: Size.SIZE_16,
  },

  // text
  textTitle: {
    ...Typo.TypoStyle(20, Colors.COLOR_WHITE, 'bold', 'Nunito'),
    marginBottom: Size.SIZE_16,
    paddingHorizontal: Size.SIZE_16,
  },

  textSubtitle: {
    ...Typo.TypoStyle(20, Colors.COLOR_WHITE, 'bold'),
  },
});

export default styles;
