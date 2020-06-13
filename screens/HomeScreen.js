import React, {useState } from 'react';
import {Modal, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ToDoList from '../components/ToDoList';
import Tile from '../components/Tile';
import { VisualObjects } from '../components/VisualObjects';
import NotesModal from "../components/NotesModal";
import GoalsModal from "../components/GoalsModal";

export default function HomeScreen({navigation}) {
  const [notesModalVisible, setNotesModalVisible] = useState(false);
  const [goalsModalVisible, setGoalsModalVisible] = useState(false);


  return (
    <View style={styles.container}>
      <NotesModal setModalVisible={setNotesModalVisible} modalVisible={notesModalVisible} />
      <GoalsModal setModalVisible={setGoalsModalVisible} modalVisible={goalsModalVisible} />

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.row} >
          <Tile className={styles.todoList}>
            <ToDoList />
          </Tile>
          <View style={styles.buttonContainer} >
            <Tile className={styles.addNoteButton}>
              <TouchableOpacity onPress={() => setNotesModalVisible(true)}>
                <VisualObjects name='plus' size={35} color='#fff' />
                <Text>Note</Text>
              </TouchableOpacity>
            </Tile>
            <Tile className={styles.addGoalButton}>
              <TouchableOpacity onPress={() => setGoalsModalVisible(true)}>
                <VisualObjects name='plus' size={35} color='#fff' />
                <Text>Goal</Text>
              </TouchableOpacity>
            </Tile>
          </View>
        </View>
      </ScrollView>
    </View>
  );
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
  buttonContainer: {
    flexDirection: 'column'
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
    width: '80%',
    alignSelf: 'flex-start',
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
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 3,
    alignSelf: 'flex-end'
  },
  addGoalButton: {
    borderRadius: 100,
    elevation: 3,
    backgroundColor: '#FFBF00',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    height: 70,
    width: 70,
    position: 'relative',
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 3,
    alignSelf: 'flex-end'
  }
});
