import React, {useState } from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView} from "react-native-safe-area-context";
import ToDoList from "../components/ToDoList";

export default function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
//     <View style={styles.container}>
//       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//         <View style={styles.list}>
//           <ToDoList />
//         </View>
//         <View style={styles.buttons}>
//           <Button title='Add Note' name="plus" onPress={onPressAddNote}/>
//         </View>
//       </ScrollView>
// \    </View>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text>This is my Home Screen</Text>
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
    flexDirection: 'column'
  },
  contentContainer: {
    paddingTop: 30,
  },
  list: {
    flex: 5,
    flexDirection: 'column',
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
  }
});
