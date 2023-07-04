import * as React from 'react';
import {Animated, FlatList, View} from 'react-native';
import styles from './styles';

const AnimatedFlatList = props => {
  const [contentOffset, setContentOffset] = React.useState({x: 0, y: 0});
  const [contentSize, setContentSize] = React.useState(0);
  const [parentWidth, setParentWidth] = React.useState(0);

  // calculate indicator active width based on data length
  const indicatorActiveWidth = 25;

  const scrollPerc =
    (contentOffset.x / (contentSize - parentWidth)) *
    (100 - indicatorActiveWidth);

  return (
    <View style={[props?.containerStyle]}>
      <FlatList
        {...props}
        onScroll={event => {
          setContentOffset(event.nativeEvent.contentOffset);
        }}
        onContentSizeChange={(w, _) => {
          setContentSize(w);
        }}
        onLayout={e => {
          setParentWidth(e.nativeEvent.layout.width);
        }}
      />
      <View></View>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicatorBackground}>
          <Animated.View
            style={[
              styles.indicatorForeground,
              {
                width: `${indicatorActiveWidth}%`,
                left: `${Number(scrollPerc || 0).toFixed(0)}%`,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default AnimatedFlatList;
