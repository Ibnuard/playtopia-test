import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Size.SIZE_16,
    backgroundColor: Colors.COLOR_WHITE,
  },

  scrollContainer: {
    paddingBottom: Scaler.scaleSize(32),
  },

  levelCard: {
    marginTop: Size.SIZE_16,
  },

  otherButton: {
    backgroundColor: Colors.COLOR_WHITE,
    padding: Size.SIZE_16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.COLOR_LIGHT_GRAY,
  },

  otherButtonLeft: {
    flex: 1,
  },

  logoutButton: {
    backgroundColor: Colors.COLOR_WHITE,
    padding: Size.SIZE_16,
  },

  // text
  textSubtitle: {
    ...Typo.TypoStyle(20, Colors.COLOR_BLACK, 'bold'),
    paddingVertical: Size.SIZE_16,
    marginTop: Size.SIZE_8,
  },

  textButtonMenu: {
    ...Typo.TypoStyle(Size.FONT_16, Colors.COLOR_BLACK, 'normal', 'Nunito'),
    paddingHorizontal: Scaler.scaleSize(8),
  },

  textButtonLogout: {
    ...Typo.TypoStyle(Size.FONT_16, Colors.COLOR_RED, 'normal', 'Nunito'),
    paddingHorizontal: Scaler.scaleSize(8),
  },
});

export default styles;
