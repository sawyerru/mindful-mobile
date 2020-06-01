import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {SafeAreaView} from "react-native-safe-area-context";
import * as React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function NotesScreen({navigation}) {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button title="Filters" onPress={()=> navigation.openDrawer()}/>
        </View>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>This is my Notes Screen</Text>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    backgroundColor: '#fafafa',
    height: '5%',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
