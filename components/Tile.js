import React from "react";
import { View, StyleSheet } from "react-native";

export default function Tile(props){
    return (
        <View style={props.className}>
            <View style={styles.tileContainer}>
                {props.children}
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    tile: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    tileContainer: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
})