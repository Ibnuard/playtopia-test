import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../../../styles';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Size.SIZE_12,
    paddingTop: Size.SIZE_8,
  },

  content: {
    padding: Size.SIZE_16,
  },

  rowDate: {
    paddingVertical: Size.SIZE_18,
  },

  switchRow: {
    paddingVertical: Size.SIZE_12,
  },

  // text
  textTitle: {
    ...Typo.TypoStyle(20, Colors.COLOR_BLACK, 'bold'),
  },

  textSelectDate: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'bold', 'Nunito'),
    flex: 1,
  },

  textSeeCalendar: {
    ...Typo.TypoStyle('normal', Colors.COLOR_PRIMARY, 'normal', 'Nunito'),
  },

  textSwitchTitle: {
    ...Typo.TypoStyle(12, Colors.COLOR_BLACK, 'bold', 'Nunito'),
    flex: 1,
  },
});

export default styles;
