import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    padding: Size.SIZE_8,
    marginRight: Size.SIZE_8,
    alignItems: 'center',
    borderRadius: 8,
    borderColor: Colors.COLOR_DARK_GRAY,
    width: Scaler.scaleSize(72),
  },

  containerActive: {
    borderWidth: 0.5,
    padding: Size.SIZE_8,
    marginRight: Size.SIZE_8,
    alignItems: 'center',
    borderRadius: 8,
    borderColor: Colors.COLOR_PRIMARY,
    width: Scaler.scaleSize(72),
  },

  // text
  textnormal: {
    ...Typo.TypoStyle(12, Colors.COLOR_BLACK, 'normal', 'Nunito'),
  },

  textDatenormal: {
    ...Typo.TypoStyle(14, Colors.COLOR_BLACK, 'bold', 'Nunito'),
  },

  textactive: {
    ...Typo.TypoStyle(12, Colors.COLOR_PRIMARY, 'normal', 'Nunito'),
  },

  textDateactive: {
    ...Typo.TypoStyle(14, Colors.COLOR_PRIMARY, 'bold', 'Nunito'),
  },
});

export default styles;
