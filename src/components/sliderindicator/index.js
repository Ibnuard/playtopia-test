import * as React from 'react';
import {Animated, FlatList, View} from 'react-native';
import styles from './styles';
import {Scaler} from '../../styles';

const AnimatedFlatList = props => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [indicatorWidth, setIndicatorWidth] = React.useState(0);
  const [indicatorLeft] = React.useState(new Animated.Value(0));

  // handle on scroll and animated indicator
  React.useEffect(() => {
    const calculateIndicatorPosition = () => {
      const itemWidth = indicatorWidth / props?.data.length;
      const leftPosition = currentIndex * (itemWidth * 2);
      Animated.spring(indicatorLeft, {
        toValue: leftPosition,
        useNativeDriver: true,
      }).start();
    };

    calculateIndicatorPosition();
  }, [currentIndex, props?.data.length, indicatorWidth]);

  // get indicator background width
  const handleLayout = event => {
    const {width} = event.nativeEvent.layout;
    setIndicatorWidth(width);
  };

  // calculate indicator active width based on data length
  const indicatorActiveWidth = indicatorWidth - Scaler.scaleSize(28);

  return (
    <>
      <FlatList
        {...props}
        onScroll={event => {
          const scrollPosition = event.nativeEvent.contentOffset.x;
          const itemWidth = event.nativeEvent.layoutMeasurement.width;
          const currentIndex = Math.round(scrollPosition / itemWidth);

          setCurrentIndex(currentIndex);
        }}
      />
      <View style={styles.indicatorContainer} onLayout={handleLayout}>
        <Animated.View
          style={[
            styles.indicator,
            {
              width: indicatorActiveWidth,
              transform: [{translateX: indicatorLeft}],
            },
          ]}
        />
      </View>
    </>
  );
};

export default AnimatedFlatList;
