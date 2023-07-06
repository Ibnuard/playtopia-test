import {Text, TextInput, View} from 'react-native';
import React from 'react';
import Touchable from '../touchable';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../styles';
import styles from './styles';
import Row from '../row';

const Counter = ({minValue = 1, maxValue = 10}) => {
  const [value, setValue] = React.useState(String(minValue));
  // render button
  const _renderButton = (type = 'plus') => {
    // is disabled
    const IS_DISABLED =
      type == 'minus' ? Number(value) <= minValue : Number(value) >= maxValue;

    return (
      <Touchable
        disabled={IS_DISABLED}
        style={[styles.button, IS_DISABLED ? styles.buttonDisabled : null]}
        onPress={() =>
          type == 'plus'
            ? setValue(String(Number(value) + 1))
            : setValue(String(Number(value) - 1))
        }>
        <Icon
          name={type}
          size={24}
          color={IS_DISABLED ? Colors.COLOR_PRIMARY_80 : Colors.COLOR_PRIMARY}
        />
      </Touchable>
    );
  };

  // handle on custom value submit
  const handleOnSubmit = () => {
    if (Number(value) < minValue) {
      setValue(String(minValue));
    }

    if (Number(value) > maxValue) {
      setValue(String(maxValue));
    }
  };

  return (
    <Row>
      {_renderButton('minus')}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={text => setValue(text)}
        keyboardType={'number-pad'}
        onBlur={() => handleOnSubmit()}
      />
      {_renderButton('plus')}
    </Row>
  );
};

export default Counter;
