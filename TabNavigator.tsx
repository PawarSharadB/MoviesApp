import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {DashboardScreen} from './src/screens/DashboardScreen';
import {WatchScreen} from './src/screens/WatchScreen';
import {MediaLibraryScreen} from './src/screens/MediaLibraryScreen';
import {MoreScreen} from './src/screens/MoreScreen';
import {MovieDetailsScreen} from './src/screens/MovieDetailsScreen';
import {VideoPlayerScreen} from './src/screens/VideoPlayerScreen';

import {MediaIcon, DashboardIcon, WatchIcon, MoreIcon} from './src/Assets';

const Tab = createBottomTabNavigator();
const WatchStack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <WatchStack.Navigator>
      <WatchStack.Screen
        options={{headerShown: false}}
        name="WatchScreen"
        component={WatchScreen}
      />
      <WatchStack.Screen
        options={{headerShown: false}}
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <WatchStack.Screen
        options={{headerShown: false}}
        name="VideoPlayerScreen"
        component={VideoPlayerScreen}
      />
    </WatchStack.Navigator>
  );
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: '#2E2739', border: 27},
        tabBarIcon: ({color}) => {
          let icon;

          switch (route.name) {
            case 'Dashboard':
              icon = <DashboardIcon fill={color} />;
              break;
            case 'Watch':
              icon = <WatchIcon color={color} />;
              break;
            case 'Media Library':
              icon = <MediaIcon color={color} />;
              break;
            case 'More':
              icon = <MoreIcon color={color} />;
              break;
            default:
              icon = null;
          }

          return icon;
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '700',
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#827D88',
      })}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen
        name="Watch"
        component={StackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Media Library" component={MediaLibraryScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
