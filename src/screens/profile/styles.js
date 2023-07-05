import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Size.SIZE_16,
    backgroundColor: Colors.COLOR_WHITE,
  },

  // text
  textSubtitle: {
    ...Typo.TypoStyle(20, Colors.COLOR_BLACK, 'bold'),
    paddingVertical: Size.SIZE_16,
    marginTop: Size.SIZE_8,
  },
});

export default styles;
