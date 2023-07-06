import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {BottomSheet, Card, Row, SearchBar} from '../../components';
import Touchable from '../../components/touchable';
import {IMAGES_RES} from '../../utils/images';
import {BuyTicketModal} from '../../components/bottomsheet/model';

const PlaygroundScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  // render top search container
  const _renderSearchContainer = () => {
    return (
      <Card style={styles.cardContainer}>
        <SearchBar placeholder={'Cari Lokasi Bermain'} />
        <Row>
          <Touchable
            style={styles.filterButton}
            onPress={() => setModalVisible(true)}>
            <Row>
              <Image source={IMAGES_RES.button.filter} />
              <Text style={styles.textFilter}>Filter</Text>
            </Row>
          </Touchable>
        </Row>
      </Card>
    );
  };

  // render bottom sheet
  const _renderBottomSheetModal = () => {
    return (
      <BottomSheet
        visible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onSwipeDone={() => setModalVisible(false)}>
        <BuyTicketModal onExit={() => setModalVisible(false)} />
      </BottomSheet>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Pilihan Lokasi</Text>
      {_renderSearchContainer()}
      {_renderBottomSheetModal()}
    </View>
  );
};

export default PlaygroundScreen;
