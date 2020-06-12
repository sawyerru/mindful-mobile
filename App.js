import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useEffect} from 'react';
import { Platform, StatusBar, StyleSheet, View, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import ProfileScreen from "./screens/ProfileScreen";
import * as SQLite from "expo-sqlite";

const Stack = createStackNavigator();

const db = SQLite.openDatabase("DB");

export default function App(props) {
  const isLoadingComplete = useCachedResources();

    //DB should have 4 tables for now
    // SETTINGS: demographics + preferences (layout and design?) // Implement late
    // TODO: (_id, Text, completed_flag, time, order)
    // NOTES: (_id,
    // GOALS: (_id,
  useEffect(() => {
      db.transaction(tx => {
          tx.executeSql(
              "create table if not exists ToDo (id integer primary key not null, key int, content text, completed bool, rank int);",
              [],
              (_, set) => {console.log("ToDo Creation SUCCESS")},
              (_, err) => {console.log("ToDo Creation FAILURE", err)}
              );
          //tx.executeSql("create table if not exits Settings (id integer primary key not null, fname text, lname text");
          tx.executeSql("create table if not exists Notes " +
              "(id integer primary key not null, " +
              "tag text, context text, feeling text, explanation text, isReflected bool, reflection text, lesson1 text, lesson2 text);",
              [],
              (_, set) => {console.log("Notes Creation SUCCESS")},
              (_, err) => {console.log("Notes Creation FAILURE", err)}
              );
          //tx.executeSql("create table if not exists Goals (;
      });
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
