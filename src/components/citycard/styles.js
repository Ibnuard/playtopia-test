import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';
import {SIZE_8} from '../../styles/size';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_GRAY,
    borderRadius: 16,
    padding: Size.SIZE_12,
    marginRight: Size.SIZE_16,
    width: Scaler.scaleSize(100),
  },

  containerhorizontal: {
    backgroundColor: Colors.COLOR_GRAY,
    borderRadius: 16,
    padding: Size.SIZE_12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },

  icon: {
    height: Scaler.scaleSize(48),
    width: Scaler.scaleSize(48),
    backgroundColor: Colors.COLOR_DARK_GRAY,
    borderRadius: 24,
  },

  iconhorizontal: {
    height: Scaler.scaleSize(32),
    width: Scaler.scaleSize(32),
    backgroundColor: Colors.COLOR_DARK_GRAY,
    borderRadius: 24,
  },

  // text

  textTitle: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'bold'),
    marginTop: Size.SIZE_16,
  },

  textTitlehorizontal: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'bold'),
    marginLeft: Size.SIZE_16,
  },
});

export default styles;
