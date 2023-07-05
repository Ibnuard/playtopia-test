import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Scaler.scaleSize(108),
    paddingHorizontal: Size.SIZE_16,
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

  // text
  textTitle: {
    ...Typo.TypoStyle(20, Colors.COLOR_WHITE, 'bold', 'Nunito'),
    marginBottom: Size.SIZE_16,
  },
});

export default styles;
