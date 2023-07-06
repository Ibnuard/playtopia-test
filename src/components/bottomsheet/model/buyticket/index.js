import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Touchable from '../../../touchable';
import {Colors} from '../../../../styles';
import Row from '../../../row';
import CustomSwitch from '../../../switch';
import Button from '../../../button';
import Counter from '../../../counter';

const BuyTicketModal = ({onExit}) => {
  // handle if toggle gift switch
  const [isGift, setIsGift] = React.useState(false);
  const toggleGiftSwitch = () => setIsGift(previousState => !previousState);

  // handle if toggle gift switch
  const [isGroup, setIsGroup] = React.useState(false);
  const toggleGroupSwitch = () => setIsGroup(previousState => !previousState);

  // main render
  return (
    <View style={styles.container}>
      <Touchable style={styles.header} onPress={onExit}>
        <Icon name="close" size={24} color={Colors.COLOR_BLACK} />
      </Touchable>
      <View style={styles.content}>
        <Text style={styles.textTitle}>Beli Tiket</Text>
        <Row style={styles.rowDate}>
          <Text style={styles.textSelectDate}>Pilih tanggal</Text>
          <Touchable>
            <Text style={styles.textSeeCalendar}>Lihat Kalender</Text>
          </Touchable>
        </Row>
        <Row style={styles.switchRow}>
          <Text style={styles.textSwitchTitle}>Beli sebagai gift</Text>
          <CustomSwitch
            value={isGift}
            onValueChange={() => toggleGiftSwitch()}
          />
        </Row>
        <Row style={styles.switchRow}>
          <Text style={styles.textSwitchTitle}>Pembelian untuk kelompok</Text>
          <CustomSwitch
            value={isGroup}
            onValueChange={() => toggleGroupSwitch()}
          />
        </Row>
        <Row style={styles.switchRow}>
          <Text style={styles.textSwitchTitle}>Jumlah Anak</Text>
          <Counter />
        </Row>
        <View style={styles.buttonContainer}>
          <Button type="secondary" title="Lanjutkan" />
        </View>
      </View>
    </View>
  );
};

export default BuyTicketModal;
