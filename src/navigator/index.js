import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import LoginScreen from '../screens/login';
import SplashScreen from '../screens/splash';
import {BackButton, TabBar} from '../components';
import {Colors, Typo} from '../styles';
import PlayCardScreen from '../screens/playcard';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

// create stack screen
const Stack = createNativeStackNavigator();

// create bottom tab
const Tab = createBottomTabNavigator();

//===================================
// ========== GAP ===================
// ==================================

export const SplashStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// auth stack screen
export const AuthStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={LoginScreen} />
    </Stack.Navigator>
  );
};

// tab stack screen
export const MainScreen = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={({route}) => ({
        tabBarStyle: (route => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (routeName === 'Home' || routeName === 'Account' || !routeName) {
            return {display: 'flex'};
          } else {
            return {display: 'none'};
          }
        })(route),
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={ProfileScreen}
        options={{title: 'Pesanan'}}
      />
      <Tab.Screen
        name="PlaycardStack"
        component={ProfileScreen}
        options={{title: 'Playcard'}}
      />
      <Tab.Screen
        name="OutletStack"
        component={ProfileScreen}
        options={{title: 'Outlet'}}
      />
      <Tab.Screen
        name="AccountStack"
        component={ProfileStack}
        options={{
          headerShown: false,
          title: 'Akun',
        }}
      />
    </Tab.Navigator>
  );
};

// home stack
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// profile stack
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          title: 'Akun',
          headerShadowVisible: false,
          headerTitleStyle: {
            ...Typo.TypoStyle(20, Colors.COLOR_BLACK, 'bold'),
          },
        }}
      />
      <Stack.Screen
        name="PlayCard"
        component={PlayCardScreen}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};
