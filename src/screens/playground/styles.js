import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
    paddingHorizontal: Size.SIZE_16,
  },

  cardContainer: {
    marginTop: Size.SIZE_24,
  },

  filterButton: {
    backgroundColor: Colors.COLOR_GRAY,
    paddingVertical: 4,
    paddingHorizontal: Size.SIZE_10,
    borderRadius: 14,
    marginTop: Size.SIZE_12,
  },

  // text
  textTitle: {
    ...Typo.TypoStyle(32, Colors.COLOR_BLACK, 'bold'),
  },

  textFilter: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'normal', 'Nunito'),
    paddingHorizontal: 4,
  },
});

export default styles;
