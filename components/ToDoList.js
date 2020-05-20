import React, {useState} from "react";
import {FlatList, StyleSheet, View, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import ListItem from './ListItem';

export default function ToDoList(props) {
    const [todos, setToDo] = useState([
        { text: 'Exercise', key: 1},
        { text: 'Build My App', key: 2},
        { text: 'Love on Anna', key: 3}
    ])
    let toDoCount = todos.length

    const [text, updateText] = useState('');

    const changeHandler = (val) => {
        updateText(val);
    }

    const pressHandler = (key) => {
        setToDo( (prevToDos)=> {
            toDoCount--;
            return prevToDos.filter(todo => todo.key !== key);
        });
    }

    const addToDo = () => {
        if (text.length >= 3) {
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

    const renderInput = () => {
        return (
            <TextInput
                style={styles.input}
                placeholder='What are you going to do?'
                onChangeText={changeHandler}
                // returnKeyType='done'
                onSubmitEditing={() => {addToDo()}}
            />
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}
        >
            <View style={styles.tileContainer}>
                <View style={styles.tile}>
                    <TextInput
                        style={styles.input}
                        placeholder=' What are you going to do?'
                        onChangeText={changeHandler}
                        returnKeyType='done'
                        onSubmitEditing={() => {addToDo()}}
                    />
                    <View style={styles.list}>
                        <FlatList
                            // ListHeaderComponent={renderInput}
                            data={todos}
                            renderItem={
                                ({item}) => (
                                    <ListItem item={item} pressHandler={pressHandler}/>
                                    )
                            }
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    tileContainer: {
        flex: 1,
        marginLeft: '2%',
        marginRight: '2%',
    },
    input: {
        height: '20%',
        fontSize: 25,
        margin: '2%',
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        justifyContent: 'center',
    },
    tile: {
        flex: 1,
        width: '80%',
        alignContent: 'center',
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 1, height: 2},
        borderWidth: 2
    },
})