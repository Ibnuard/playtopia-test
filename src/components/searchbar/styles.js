import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_PRIMARY_50,
    borderRadius: 48,
    paddingHorizontal: Scaler.scaleSize(6),
  },

  inputLeft: {
    paddingHorizontal: Size.SIZE_14,
  },

  input: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'normal', 'Nunito'),
    flex: 1,
  },
});

export default styles;
