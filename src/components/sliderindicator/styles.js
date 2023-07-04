import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size} from '../../styles';

const styles = StyleSheet.create({
  indicatorContainer: {alignSelf: 'center', marginTop: Size.SIZE_10},
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
});

export default styles;
