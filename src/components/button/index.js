import * as React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Colors} from '../../styles';
import styles from './styles';

const Button = ({
  upperCase = false,
  isLoading = false,
  disabled = false,
  invert = false,
  type = 'primary', // primary || secondary
  title = 'This is Button',
  buttonStyle,
  textStyle,
  onPress,
}) => {
  //define button and text style based on condition
  const _containerStyle = () => {
    return {
      button: disabled
        ? styles[invert ? 'disabled_invert' : 'disabled'] // handle on disabled
        : styles[invert ? `invert_${type}` : type], // handle on active
      text: disabled
        ? styles['text_disabled'] // handle on disabled
        : styles[`text_title_${invert ? 'invert_' : ''}${type}`], // handle on active
    };
  };

  //handle is Loading statment
  const _renderContent = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          color={invert ? Colors.COLOR_GRAY : Colors.COLOR_WHITE}
        />
      );
    } else {
      return (
        <Text style={[textStyle, _containerStyle().text]}>
          {upperCase ? title.toUpperCase() : title}
        </Text>
      );
    }
  };

  //main render
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.6}
      style={[_containerStyle().button, buttonStyle]}
      onPress={disabled || isLoading ? null : onPress ?? null}>
      {_renderContent()}
    </TouchableOpacity>
  );
};

export default Button;
