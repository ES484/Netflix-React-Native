import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import Home from './screens/Home/Home';
import MovieDetailsScreen from './components/MovieDetailsScreen/MovieDetailsScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Downloads from './components/Downloads/Downloads';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Search from './components/Search/Search';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
      name="HomeScreen" 
      component={HomeNavigator} 
      options={{ 
        headerShown: false, 
        tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />, 
        title:'Home'
        }} />
      <Tab.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{
          title: 'Coming Soon',
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) =><Ionicons name="search" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
const HomeStack = createStackNavigator();
function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ 
          title: ''
         }}
      />
    </HomeStack.Navigator>
  );
}
