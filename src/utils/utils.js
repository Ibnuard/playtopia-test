import {Colors} from '../styles';

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
      return Colors.PLAYCARD_BRONZE_HOME_ORNAMENT;
      break;
    case 'SILVER':
      return Colors.PLAYCARD_SILVER_HOME_ORNAMENT;
      break;

    default:
      break;
  }
};
