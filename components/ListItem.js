import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from "react-native";

export default function ListItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.listItem}> {'\u2022'} {item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 5,
        margin: 4,
        // backgroundColor: '#d3d3d3',
        // borderStyle: 'dashed',
        borderRadius: 10,
        fontSize: 20,
        borderBottomColor: 'black',
        // borderBottomStyle: 'solid'
        // textDecorationLine: 'line-through'
    },
})