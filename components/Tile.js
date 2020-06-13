import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {NotificationIcon} from "./VisualObjects";

export default function Tile(props){
    return (
        <View style={props.className}>
            {props.notify &&  <View style={styles.notify} >
                                <NotificationIcon />
                              </View>}
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
    notify: {
        position: 'relative',
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        alignSelf: 'flex-end'
    }
})