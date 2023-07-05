import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Scaler.scaleSize(108),
    paddingHorizontal: Size.SIZE_16,
  },

  bgBronze: {
    backgroundColor: Colors.PLAYCARD_BRONZE,
  },

  starBg: {
    position: 'absolute',
    right: -100,
    top: -100,
  },
});

export default styles;
