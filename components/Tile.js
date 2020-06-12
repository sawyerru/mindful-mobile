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
    tileContainer: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
})