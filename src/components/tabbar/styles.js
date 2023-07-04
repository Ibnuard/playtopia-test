import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.COLOR_WHITE,
    borderTopWidth: 0.5,
    borderColor: Colors.COLOR_LIGHT_GRAY,
    paddingVertical: Size.SIZE_12,
  },

  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabButtonCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -8,
  },

  // text
  textTitle: {
    ...Typo.TypoStyle('normal', Colors.COLOR_DARK_GRAY, 'normal', 'Nunito'),
    marginTop: Size.SIZE_10,
  },
});

export default styles;
