import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: Size.SIZE_16,
    paddingVertical: Size.SIZE_24,
    marginTop: Size.SIZE_16,
    alignItems: 'center',
  },

  cardContainer: {
    height: '54%',
    alignItems: 'center',
  },

  levelCard: {
    marginTop: -Scaler.scaleSize(60),
    width: '96%',
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: Size.SIZE_16,
  },

  bottomButton: {
    borderColor: Colors.COLOR_WHITE,
  },

  // text

  textTitle: {
    ...Typo.TypoStyle(16, Colors.COLOR_BLACK, 'bold'),
  },

  textSubtitle: {
    ...Typo.TypoStyle('normal', Colors.COLOR_BLACK, 'normal', 'Nunito'),
    paddingVertical: Size.SIZE_16,
  },

  textButton: {
    ...Typo.TypoStyle('medium', Colors.COLOR_WHITE, 'normal', 'Nunito'),
    paddingVertical: Size.SIZE_16,
  },
});

export default styles;
