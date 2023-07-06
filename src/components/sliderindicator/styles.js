import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size} from '../../styles';

const styles = StyleSheet.create({
  indicatorContainer: {
    alignSelf: 'center',
    marginTop: Size.SIZE_10,
  },
  indicatorBackground: {
    height: Scaler.scaleSize(6),
    width: Scaler.scaleSize(50),
    borderRadius: 4,
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
    justifyContent: 'center',
  },
  indicatorForeground: {
    position: 'absolute',
    height: Scaler.scaleSize(6),
    borderRadius: 4,
    backgroundColor: Colors.COLOR_PRIMARY,
  },

  longDot: {
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
    height: 20,
    width: 20,
  },

  dotCircle: {
    height: Size.SIZE_8,
    width: Size.SIZE_8,
    marginHorizontal: 2,
    borderRadius: 5,
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
  },

  dotCircleActive: {
    height: Size.SIZE_8,
    width: Size.SIZE_18,
    marginHorizontal: 2,
    borderRadius: 5,
    backgroundColor: Colors.COLOR_DARK_GRAY,
  },
});

export default styles;
