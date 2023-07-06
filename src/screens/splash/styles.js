import {StyleSheet} from 'react-native';
import {Colors, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.COLOR_PRIMARY,
  },

  // Text

  textTitle: {
    ...Typo.TypoStyle(24, Colors.COLOR_WHITE, 'bold'),
  },
});

export default styles;
