import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    borderRadius: 16,
  },

  childTop: {
    padding: Size.SIZE_16,
  },

  childBottom: {
    padding: Size.SIZE_16,
    backgroundColor: Colors.COLOR_PRIMARY_50,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.COLOR_LIGHT_GRAY,
  },

  detailButton: {
    marginTop: Size.SIZE_8,
    paddingVertical: 4,
  },

  bottomLeftChild: {
    flex: 1,
  },

  // text
  textName: {
    ...Typo.TypoStyle(20, Colors.COLOR_BLACK, 'bold'),
  },

  textDetailButton: {
    ...Typo.TypoStyle(Size.SIZE_16, Colors.COLOR_PRIMARY, 'normal', 'Nunito'),
  },

  textChildTitle: {
    ...Typo.TypoStyle(Size.SIZE_16, Colors.COLOR_BLACK, 'bold', 'Nunito'),
  },

  textChildCount: {
    ...Typo.TypoStyle(Size.SIZE_14, Colors.COLOR_BLACK, 'normal', 'Nunito'),
    marginTop: 4,
  },
});

export default styles;
