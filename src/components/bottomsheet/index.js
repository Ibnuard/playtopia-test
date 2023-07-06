import {View, Text} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';

const BottomSheet = ({
  visible,
  children,
  onSwipeDone,
  onHide,
  onBackButtonPress,
  style,
}) => {
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.25}
      swipeDirection={['down']}
      style={{margin: 0, justifyContent: 'flex-end'}}
      onModalHide={onHide}
      useNativeDriverForBackdrop
      onBackButtonPress={onBackButtonPress}
      onSwipeComplete={onSwipeDone}>
      <View style={styles.topPull} />
      <View style={[styles.container, style]}>{children}</View>
    </Modal>
  );
};

export default BottomSheet;
