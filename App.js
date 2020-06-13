import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useEffect} from 'react';
import { Platform, StatusBar, StyleSheet, View, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import ProfileScreen from "./screens/ProfileScreen";
const Stack = createStackNavigator();

import database, {createTables} from "./services/Database";
const db = database();


export default function App(props) {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
      createTables(db);
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <SafeAreaProvider>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
              <NavigationContainer theme={DefaultTheme} linking={LinkingConfiguration}>
                <Stack.Navigator>
                  <Stack.Screen name="Root" component={BottomTabNavigator}/>
                  <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
              </NavigationContainer>

          </View>
        </SafeAreaProvider>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
