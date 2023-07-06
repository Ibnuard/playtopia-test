import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Touchable from '../../../touchable';
import {Colors} from '../../../../styles';
import Row from '../../../row';
import {Switch} from 'react-native-switch';

const BuyTicketModal = () => {
  // handle if toggle gift switch
  const [isGift, setIsGift] = React.useState(false);
  const toggleGiftSwitch = () => setIsGift(previousState => !previousState);

  // main render
  return (
    <View style={styles.container}>
      <Touchable style={styles.header}>
        <Icon name="close" size={24} color={Colors.COLOR_BLACK} />
      </Touchable>
      <View style={styles.content}>
        <Text style={styles.textTitle}>Title</Text>
        <Row style={styles.rowDate}>
          <Text style={styles.textSelectDate}>Pilih tanggal</Text>
          <Touchable>
            <Text style={styles.textSeeCalendar}>Lihat Kalender</Text>
          </Touchable>
        </Row>
        <Switch
          value={isGift}
          onValueChange={val => toggleGiftSwitch()}
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
      </View>
    </View>
  );
};

export default BuyTicketModal;
