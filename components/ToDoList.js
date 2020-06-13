import React, {useState, useEffect} from "react";
import {FlatList, TouchableOpacity, StyleSheet, View, TextInput, Alert, TouchableWithoutFeedback, Keyboard, Text} from "react-native";

import {globalStyles} from "../styles/globalStyles";
import { VisualObjects } from './VisualObjects';
import ListItem from './ListItem';
import database, {ToDoTable} from '../services/Database';
import ToDoListModal from "./ToDoListModal";
const db = database();


export default function ToDoList(props) {
    // Modal State
    const [modalVisible, setModalVisible] = useState(false);

    // ToDo Text and List State
    const [todos, setToDo] = useState([]);
    const [text, updateText] = useState('');
    const changeHandler = (val) => {
        updateText(val);
    }

    // Initial Load of table
    useEffect( ()=> {
        ToDoTable.loadList(db, setToDo);
    },
    []);

    let toDoCount = todos.length;

    const pressHandler = (key) => {
        ToDoTable.markComplete(db, key);
        ToDoTable.loadList(db, setToDo);
    }

    const addToDo = () => {
        if (text.length >= 3) {
            // Write to ToDo Table
            ToDoTable.insertItem(db, text, toDoCount);
            ToDoTable.loadList(db, setToDo);

        }
        else {
            Alert.alert("Enter more text please")
        }
    }

    const expandList = () => {
        alert('Expand ToDo List')
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <ToDoListModal modalVisible={modalVisible} setModalVisible={setModalVisible} updateList={setToDo}/>
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.header}>
                            <TextInput
                                style={styles.input}
                                placeholder='What are you going to do?'
                                onChangeText={changeHandler}
                                returnKeyType='done'
                                onSubmitEditing={() => {
                                    addToDo();
                                    updateText("");
                                    }
                                }
                            />
                            <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                                <Text style={styles.ellipses}>...</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    data={todos}
                    renderItem={
                        ({item}) => (
                            <ListItem item={item} pressHandler={pressHandler}/>
                        )
                    }
                    keyExtractor={(item) => item.key.toString()}
                    ListFooterComponent={
                        toDoCount > 3 && <View>
                                            <TouchableOpacity style={styles.chevron} onPress={expandList}>
                                                <VisualObjects name='chevron-down' size={15} color='#000'/>
                                            </TouchableOpacity>
                                        </View>
                    }
                />
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 45,
        fontSize: 20,
        padding: 10,
        margin: '2%',
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        justifyContent: 'center',
    },
    chevron: {
        alignSelf: 'flex-end',
    },
    ellipses: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        paddingRight: 1
    },
})