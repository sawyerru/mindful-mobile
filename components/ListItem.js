import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from "react-native";

export default function ListItem({item, pressHandler}) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={{
                padding: 5,
                margin: 4,
                borderRadius: 10,
                fontSize: 20,
                borderBottomColor: 'black',
                textDecorationLine: item.completed ? 'line-through' : 'none'}}
            >{'\u2022'} {item.content}</Text>
        </TouchableOpacity>
    )
}
