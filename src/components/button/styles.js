import {StyleSheet} from 'react-native';
import {Colors, Scaler, Typo} from '../../styles';

const styles = StyleSheet.create({
  // button style type
  primary: {
    width: '100%',
    height: Scaler.scaleSize(48),
    backgroundColor: Colors.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  secondary: {
    width: '100%',
    height: Scaler.scaleSize(48),
    backgroundColor: Colors.COLOR_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  invert_primary: {
    width: '100%',
    height: Scaler.scaleSize(48),
    borderWidth: 1,
    borderColor: Colors.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  invert_secondary: {
    width: '100%',
    height: Scaler.scaleSize(48),
    borderWidth: 1,
    borderColor: Colors.COLOR_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  disabled: {
    width: '100%',
    height: Scaler.scaleSize(48),
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  disabled_invert: {
    width: '100%',
    height: Scaler.scaleSize(48),
    borderWidth: 1.5,
    borderColor: Colors.COLOR_LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  //text style
  text_title_primary: {
    ...Typo.TypoStyle('medium', Colors.COLOR_WHITE),
  },

  text_title_invert_primary: {
    ...Typo.TypoStyle('medium', Colors.COLOR_PRIMARY),
  },

  text_title_invert_secondary: {
    ...Typo.TypoStyle('medium', Colors.COLOR_SECONDARY),
  },

  text_disabled: {
    ...Typo.TypoStyle('medium', Colors.COLOR_DARK_GRAY),
  },
});

export default styles;
