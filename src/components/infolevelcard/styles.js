import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../styles';
import {SIZE_12} from '../../styles/size';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    borderRadius: 16,
    padding: 0,
  },

  rpIcon: {
    width: Size.SIZE_24,
    height: Size.SIZE_24,
    marginRight: 8,
  },
  topContainer: {
    padding: SIZE_12,
    marginRight: Size.SIZE_12,
  },
  bottomContainer: {
    borderRadius: 16,
    backgroundColor: Colors.COLOR_WHITE,
    padding: Size.SIZE_12,
  },

  // text
  textLightNormal: {
    ...Typo.TypoStyle('normal', Colors.COLOR_WHITE, 'normal', 'Nunito'),
  },

  textLightBold: {
    ...Typo.TypoStyle('normal', Colors.COLOR_WHITE, 'bold', 'Nunito'),
  },

  textDarkNormal: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'normal', 'Nunito'),
  },

  textDarkBold: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'bold', 'Nunito'),
  },
});

export default styles;
