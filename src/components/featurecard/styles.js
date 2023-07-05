import {StyleSheet} from 'react-native';
import {Colors, Scaler, Size, Typo} from '../../styles';

const styles = StyleSheet.create({
  parent: {
    marginTop: Size.SIZE_16,
  },
  container: {
    overflow: 'hidden',
    height: Scaler.scaleSize(100),
    borderRadius: 16,
    justifyContent: 'center',
  },

  containerLocked: {
    overflow: 'hidden',
    height: Scaler.scaleSize(100),
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,1)',
    opacity: 0.5,
  },
  ornamentSmall: {
    position: 'absolute',
    right: 20,
    bottom: -55,
  },

  ornamentLarge: {
    position: 'absolute',
    left: -25,
    top: -90,
  },

  rowContainer: {
    paddingVertical: Size.SIZE_16,
    paddingHorizontal: Size.SIZE_24,
    height: '100%',
  },

  lockedContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },

  lockIcon: {
    position: 'absolute',
    right: 30,
    top: 30,
  },

  // text
  textTitle: {
    ...Typo.TypoStyle('large', Colors.COLOR_WHITE, 'bold'),
    flex: 1,
    alignSelf: 'flex-start',
  },
});

export default styles;
