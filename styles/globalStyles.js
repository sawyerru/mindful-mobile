import React from "react";
import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    header: {
        backgroundColor: '#3498db',
    },
    tile: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    tileContainer: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
})