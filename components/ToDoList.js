import React, {useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";

export default function ToDoList(props) {
    const [todos, setToDo] =

    return (
        <View style={styles.tileContainer}>
            <View style={styles.input}>
                {/* input new items */}
            </View>
            <View style={styles.list}>
                <FlatList
                    data={todos}
                    renderItem={({item}) = () => } style={}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    tileContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#777',
        backgroundColor: '#ecf0f1'
    },
    input: {

    },
    list: {

    },
})