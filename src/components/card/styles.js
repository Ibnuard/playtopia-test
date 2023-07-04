import {StyleSheet} from 'react-native';
import {Colors, Size} from '../../styles';

const styles = StyleSheet.create({
  container_shadow: {
    width: '100%',
    backgroundColor: Colors.COLOR_WHITE,
    padding: Size.SIZE_12,
    borderRadius: 24,
    shadowColor: Colors.COLOR_GRAY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },

  container_border: {
    width: '100%',
    backgroundColor: Colors.COLOR_WHITE,
    padding: Size.SIZE_12,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.COLOR_LIGHT_GRAY,
  },
});

export default styles;
