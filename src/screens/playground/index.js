import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {BottomSheet, Card, CityCard, Row, SearchBar} from '../../components';
import Touchable from '../../components/touchable';
import {IMAGES_RES} from '../../utils/images';
import {BuyTicketModal} from '../../components/bottomsheet/model';
import {useQuery} from '@apollo/client';
import {ALL_CITIES_QUERY} from '../../api/queries';

const PlaygroundScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  // fetch all cities
  const {loading, data} = useQuery(ALL_CITIES_QUERY);

  // render top search container
  const _renderSearchContainer = () => {
    return (
      <Card style={styles.cardContainer}>
        <SearchBar placeholder={'Cari Lokasi Bermain'} />
        <Row>
          <Touchable style={styles.filterButton}>
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

  // render list
  const _renderCityList = () => {
    return (
      <View style={styles.cityListContainer}>
        <FlatList
          data={data ? data.allCities : [1, 2, 3, 4, 5, 6]}
          contentContainerStyle={styles.citiesList}
          renderItem={({item, index}) => (
            <CityCard
              data={item}
              type={'horizontal'}
              onPress={() => setModalVisible(true)}
            />
          )}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Pilihan Lokasi</Text>
      {_renderSearchContainer()}
      {_renderBottomSheetModal()}
      {_renderCityList()}
    </View>
  );
};

export default PlaygroundScreen;
