import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_GRAY,
    borderRadius: 16,
    padding: Size.SIZE_12,
    marginRight: Size.SIZE_16,
    width: Scaler.scaleSize(100),
  },

  icon: {
    height: Scaler.scaleSize(48),
    width: Scaler.scaleSize(48),
    backgroundColor: Colors.COLOR_DARK_GRAY,
    borderRadius: 24,
  },

  // text

  textTitle: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'bold'),
    marginTop: Size.SIZE_16,
  },
});

export default styles;
