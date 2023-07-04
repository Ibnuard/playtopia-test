// Initialize typhography
import {Colors} from '.';
import {scaleFont} from './scaler';
import {FONT_10, FONT_14, FONT_16, FONT_18, FONT_24, FONT_8} from './size';

// init font size
const FONT_SIZE = {
  extra_small: FONT_8,
  small: FONT_10,
  normal: FONT_14,
  medium: FONT_16,
  large: FONT_18,
  extra_large: FONT_24,
};

// initialize font style
const FONT_STYLE = (font = 'Rebond-Grotesque', weight = 'normal') => {
  if (weight == 'normal') {
    return font;
  } else if (weight == 'medium' || weight == 500) {
    return `${font}-Medium`;
  } else {
    return `${font}-Bold`;
  }
};

// custom text styling
export const TypoStyle = (
  size = 'normal', // extra_small || small || normal || medium || large || extra_large
  color = Colors.COLOR_BLACK,
  weight = 'normal', // normal || 500 || bold
  font = 'Rebond-Grotesque', // 'Rebond-Grotesque || Nunito
) => {
  return {
    color: color ?? COLOR_BLACK,
    fontSize: typeof size == 'string' ? FONT_SIZE[size] : scaleFont(size),
    fontFamily: FONT_STYLE(font, weight),
  };
};
