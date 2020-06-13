import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider} from "react-native-safe-area-context";
import * as React from 'react';

import {Icon} from '../components/VisualObjects';
import HeaderStackNavigation from "./HeaderStackNavigation";
import NotesDrawerNavigation from "./NotesDrawerNavigation";
import GoalsDrawerNavigation from "./GoalsDrawerNavigation";
import { ProfileIcon, DrawerMenuIcon } from "../components/Header";
import { globalStyles} from "../styles/globalStyles";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({
      headerTitle: getHeaderTitle(route),
      headerRight: () => <ProfileIcon navigation={navigation} />,
      headerStyle: globalStyles.header
  });

  return (
      <BottomTab.Navigator
          initialRouteName={INITIAL_ROUTE_NAME}
          tabBarOptions={{
              activeTintColor: '#3498db',
              showLabel: false
          }}>
          <BottomTab.Screen
              name="Notes"
              component={NotesDrawerNavigation}
              options={{
                  tabBarIcon: ({ focused, color }) => <Icon name="sticky-note" size={30} color={color}/>,
              }}
          />
          <BottomTab.Screen
              name="Home"
              component={HeaderStackNavigation}
              options={{
                  tabBarIcon: ({ focused, color }) => <Icon name="home" size={30} color={color}/>,
              }}
          />
          <BottomTab.Screen
              name="Goals"
              component={GoalsDrawerNavigation}
              options={{
                  tabBarIcon: ({ focused, color }) => <Icon name="area-chart" size={30} color={color} />,
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
      return 'Goals';
    case 'Notes':
        return 'Notes'
  }
}
