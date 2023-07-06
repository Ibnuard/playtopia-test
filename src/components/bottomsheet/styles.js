import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_WHITE,
    maxHeight: '70%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  topPull: {
    width: Scaler.scaleSize(62),
    height: Scaler.scaleSize(8),
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 6,
    backgroundColor: Colors.COLOR_WHITE,
  },
});

export default styles;
