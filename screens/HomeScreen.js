import React, {useState } from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ToDoList from '../components/ToDoList';
import Tile from '../components/Tile';

export default function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.row}>
          <Tile className={styles.todoList}>
            <ToDoList />
          </Tile>
          <Tile className={styles.addNoteButton}>
            <Button title="+" onPress={()=> alert("Add Note")} />
          </Tile>
        </View>
      </ScrollView>
    </View>
  );
}

function onPressAddNote(name){
  // setModalVisible(true);
  Alert.alert('Button Pressed!' + name)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
  },
  todoList: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: '80%'
  },
  addNoteButton: {
    borderRadius: 100,
    elevation: 3,
    backgroundColor: '#1fc600',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    height: 70,
    width: 70,
    position: 'relative',
  }
});
