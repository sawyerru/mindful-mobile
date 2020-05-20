import React from "react";
import { View, StyleSheet } from "react-native";

export default function Tile(props){
    <View style={styles.tile}>
        <Text style={styles.title}>{props.title}</Text>
    </View>
}

const styles= StyleSheet.create({
    tile: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 1, height: 2},
        borderWidth: 2,
    }
})