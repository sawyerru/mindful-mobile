import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import {Icon} from '../components/Icon';
import HomeScreen from '../screens/HomeScreen';
import GoalsScreen from '../screens/GoalsScreen';
import NotesScreen from '../screens/NotesScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator 
        initialRouteName={INITIAL_ROUTE_NAME}
        tabBarOptions={{
            activeTintColor: '#e91e63',
            //showLabel: false
        }}>
      <BottomTab.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <Icon name="sticky-note" size={30} color={color}/>
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <Icon name="home" size={30} color={color}/>
        }}
      />
      <BottomTab.Screen
        name="Goals"
        component={GoalsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <Icon name="area-chart" size={30} color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Dashboard';
    case 'Goals':
      return 'Set some goals';
    case 'Notes':
        return 'Make a note'
  }
}
