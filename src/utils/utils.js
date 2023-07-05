import {Colors} from '../styles';
import {PLAYCARD_SILVER_TEXT} from '../styles/colors';

// create simple log
export const cLog = (log = '', color) => {
  const _selectColor = () => {
    switch (color) {
      case 'red':
        return '\x1B[31m';
        break;
      case 'blue':
        return '\x1B[34m';
        break;
      default:
        return '';
        break;
    }
  };
  console.log(`${_selectColor()}${log}`);
};

// callback to avoid re-render
export const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

// handle svg color based on modes
export const getColorByMode = mode => {
  switch (mode) {
    case 'BRONZE':
      return {
        home_ornament: Colors.PLAYCARD_BRONZE_HOME_ORNAMENT,
        badge: Colors.PLAYCARD_BRONZE_BADGE,
        card: Colors.PLAYCARD_BRONZE_CARD,
        feature: Colors.PLAYCARD_BRONZE_CARD_DARK,
        text: Colors.PLAYCARD_BRONZE_TEXT,
      };
      break;
    case 'SILVER':
      return {
        home_ornament: Colors.PLAYCARD_SILVER_HOME_ORNAMENT,
        badge: Colors.PLAYCARD_SILVER_BADGE,
        card: Colors.PLAYCARD_SILVER_CARD,
        feature: Colors.PLAYCARD_SILVER_CARD_DARK,
        text: PLAYCARD_SILVER_TEXT,
      };
      break;

    default:
      return {
        home_ornament: Colors.PLAYCARD_BRONZE_HOME_ORNAMENT,
        badge: Colors.PLAYCARD_BRONZE_BADGE,
        card: Colors.PLAYCARD_BRONZE_CARD,
        feature: Colors.PLAYCARD_BRONZE_CARD_DARK,
        text: Colors.PLAYCARD_BRONZE_TEXT,
      };
      break;
  }
};
