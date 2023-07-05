import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: Scaler.scaleSize(86),
    justifyContent: 'center',
  },
  childContainer: {
    padding: Size.SIZE_24,
    justifyContent: 'center',
  },
  cardBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  badge: {
    marginTop: Size.SIZE_8,
  },
  childLeft: {
    flex: 1,
  },

  // text
  textVoucherAvailable: {
    ...Typo.TypoStyle('medium', Colors.COLOR_BLACK, 'bold', 'Nunito'),
    marginLeft: Size.SIZE_12,
  },
});

export default styles;
