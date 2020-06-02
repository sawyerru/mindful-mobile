import React, {useState} from "react";
import {FlatList, TouchableOpacity, StyleSheet, View, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard, Text} from "react-native";
import * as SQLite from 'expo-sqlite';

import {globalStyles} from "../styles/globalStyles";
import ListItem from './ListItem';

const db = SQLite.openDatabase("db.db");
//DB should have 4 tables for now
// SETTINGS: demographics + preferences (layout and design?) // Implement late
// TODO: (_id, Text, completed_flag, time, order)
// NOTES: (_id,
// GOALS: (_id,

export default function ToDoList(props) {

    const [todos, setToDo] = useState([
        {key: 1, text: "Run 4 Miles"},
        {key: 2, text: "Call Car Shop"}
    ])
    let toDoCount = todos.length

    const [text, updateText] = useState('');

    const changeHandler = (val) => {
        updateText(val);
    }

    const pressHandler = (key) => {
        setToDo( (prevToDos)=> {
            toDoCount--;
            // remove from ToDo table
            return prevToDos.filter(todo => todo.key !== key);
        });
    }

    const addToDo = () => {
        if (text.length >= 3) {
            // Write to ToDo table
            //  db.transaction()
            toDoCount++;
            setToDo(prevState => {
                return [
                    {text: text, key: toDoCount++},
                    ...prevState
                ]
            })
        }
        else {
            Alert.alert("Enter more text please")
        }
    }

    const expandList = () => {
        alert('Expand ToDo List')
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}
        >
            <FlatList
                ListHeaderComponent={
                 <TextInput
                     style={styles.input}
                     placeholder='What are you going to do?'
                     onChangeText={changeHandler}
                     returnKeyType='done'
                     onSubmitEditing={() => {addToDo()}}
                 />
                }
                data={todos}
                renderItem={
                    ({item}) => (
                        <ListItem item={item} pressHandler={pressHandler}/>
                        )
                }
                keyExtractor={(item) => item.key.toString()}
                ListFooterComponent={
                    <TouchableOpacity onPress={expandList}>
                        <Text style={styles.ellipses}> ... </Text>
                    </TouchableOpacity>
                }
            />
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        fontSize: 20,
        padding: 10,
        margin: '2%',
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        justifyContent: 'center',
    },
    ellipses: {
        fontSize: 30,
        alignSelf: 'flex-end'
    },
})