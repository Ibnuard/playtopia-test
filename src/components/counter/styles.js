import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  button: {
    height: Scaler.scaleSize(40),
    width: Scaler.scaleSize(40),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonDisabled: {
    borderColor: Colors.COLOR_PRIMARY_80,
  },

  input: {
    ...Typo.TypoStyle(16, Colors.COLOR_BLACK, 'bold', 'Nunito'),
    backgroundColor: Colors.COLOR_GRAY,
    padding: 0,
    width: Scaler.scaleSize(52),
    height: Scaler.scaleSize(40),
    borderRadius: 8,
    marginHorizontal: Size.SIZE_8,
    textAlign: 'center',
  },
});

export default styles;
