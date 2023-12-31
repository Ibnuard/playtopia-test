import * as React from 'react';
import {Animated, Dimensions, FlatList, View} from 'react-native';
import styles from './styles';
import Row from '../row';

const AnimatedFlatList = props => {
  const [contentOffset, setContentOffset] = React.useState({x: 0, y: 0});
  const [contentSize, setContentSize] = React.useState(0);
  const [parentWidth, setParentWidth] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  // calculate indicator active width based on data length
  const indicatorActiveWidth = 45;

  // paralax var
  const {width} = Dimensions.get('window');
  const itemLength = props?.data.length;
  const itemWidth = width / (itemLength + 0.5);
  const startScroll = (itemWidth * 3) / 4;

  // slider indicator var
  const scrollPerc =
    (contentOffset.x / (contentSize - parentWidth)) *
    (100 - indicatorActiveWidth);

  const snapToOffsets = props?.data?.map((x, i) => {
    return i * itemWidth + startScroll;
  });

  // check on scroll index change
  React.useEffect(() => {
    const currentIndex = Math.round(contentOffset.x / parentWidth);

    setActiveIndex(currentIndex ? currentIndex : 0);
    props?.onActiveIndex
      ? props.onActiveIndex(currentIndex ? currentIndex : 0)
      : null;
  }, [contentOffset]);

  // render slider indicator
  const _renderSliderIndicator = () => {
    return (
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
    );
  };

  // render dot indicator
  const _renderDotIndicator = () => {
    return (
      <Row>
        {props.data.map((item, index) => {
          return (
            <View
              key={item + index}
              style={styles[`dotCircle${activeIndex == index ? 'Active' : ''}`]}
            />
          );
        })}
      </Row>
    );
  };

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
      <View style={styles.indicatorContainer}>
        {props.indicator == 'dot'
          ? _renderDotIndicator()
          : _renderSliderIndicator()}
      </View>
    </View>
  );
};

export default AnimatedFlatList;
