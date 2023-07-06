import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Card, Row, SearchBar} from '../../components';
import Touchable from '../../components/touchable';
import {IMAGES_RES} from '../../utils/images';

const PlaygroundScreen = () => {
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
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Pilihan Lokasi</Text>
      {_renderSearchContainer()}
    </View>
  );
};

export default PlaygroundScreen;
