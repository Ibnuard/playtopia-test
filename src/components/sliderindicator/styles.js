import {StyleSheet} from 'react-native';
import {Colors, Scaler} from '../../styles';

const styles = StyleSheet.create({
  indicatorContainer: {
    height: Scaler.scaleSize(6),
    width: Scaler.scaleSize(50),
    borderRadius: 4,
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
    justifyContent: 'center',
  },
  indicator: {
    position: 'absolute',
    height: Scaler.scaleSize(6),
    borderRadius: 4,
    backgroundColor: Colors.COLOR_PRIMARY,
  },
});

export default styles;
