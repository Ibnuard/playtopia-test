import {Text, View} from 'react-native';
import React from 'react';
import {Switch} from 'react-native-switch';

const CustomSwitch = (value, onValueChange) => {
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      disabled={false}
      circleSize={24}
      backgroundActive={Colors.COLOR_PRIMARY_50}
      backgroundInactive={Colors.COLOR_DARK_GRAY}
      circleActiveColor={Colors.COLOR_PRIMARY}
      circleInActiveColor={Colors.COLOR_WHITE}
      circleBorderActiveColor={Colors.COLOR_PRIMARY_50}
      circleBorderInactiveColor={Colors.COLOR_DARK_GRAY}
      circleBorderWidth={2}
      changeValueImmediately={true}
      renderActiveText={false}
      renderInActiveText={false}
    />
  );
};

export default CustomSwitch;
