import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';
import {BackButton} from '../../components';

const PlayCardScreen = ({navigation}) => {
  // set back button
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      });

      return () => null;
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text>PlayCardScreen</Text>
    </View>
  );
};

export default PlayCardScreen;
