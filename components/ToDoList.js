import React, {useState, useEffect} from "react";
import {FlatList, TouchableOpacity, StyleSheet, View, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard, Text} from "react-native";
import * as SQLite from 'expo-sqlite';

import {globalStyles} from "../styles/globalStyles";
import ListItem from './ListItem';
import database, {ToDoTable} from '../services/Database';
const db = database();

export default function ToDoList(props) {

    const [todos, setToDo] = useState([])

    let toDoCount = todos.length

    const [text, updateText] = useState('');

    const changeHandler = (val) => {
        updateText(val);
    }

    const pressHandler = (key) => {
        setToDo( (prevToDos)=> {
            toDoCount--;
            ToDoTable.markComplete(db, key)
            return prevToDos.filter(todo => todo.key !== key);
        });
    }

    const show = () => {
        ToDoTable.show(db);
    }

    const addToDo = () => {
        if (text.length >= 3) {

            // Write to ToDo Table
            ToDoTable.insertItem(db, text, toDoCount);

            //Update rendered Objects
            setToDo(prevState => {
                return [
                    {text: text, key: toDoCount},
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
        height: 45,
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