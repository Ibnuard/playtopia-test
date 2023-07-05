import {StyleSheet} from 'react-native';
import {Size} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderRadius: 16,
  },

  child: {
    padding: Size.SIZE_16,
  },

  badgeContainer: {
    flex: 1,
  },

  badgeIcon: {
    width: 100,
    height: 24,
  },

  imageGardient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    transform: [
      {
        scaleX: -1,
      },
    ],
  },
});

export default styles;
