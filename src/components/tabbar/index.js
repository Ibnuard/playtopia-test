import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {IMAGES_RES} from '../../utils/images';
import {Colors} from '../../styles';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // handle icon
        const getIcon = () => {
          switch (route.name) {
            case 'HomeStack':
              return IMAGES_RES.tabIcon['home'];
              break;
            case 'OrderStack':
              return IMAGES_RES.tabIcon['order'];
              break;
            case 'PlaycardStack':
              return IMAGES_RES.tabIcon['playcard'];
              break;
            case 'OutletStack':
              return IMAGES_RES.tabIcon['outlet'];
              break;
            case 'AccountStack':
              return IMAGES_RES.tabIcon['account'];
              break;
            default:
              break;
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={
              route.name == 'PlaycardStack'
                ? styles.tabButtonCenter
                : styles.tabButton
            }>
            <Image source={getIcon()} />
            <Text
              style={[
                styles.textTitle,
                {
                  color: isFocused
                    ? Colors.COLOR_PRIMARY
                    : Colors.COLOR_DARK_GRAY,
                },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
