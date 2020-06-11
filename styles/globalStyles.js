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
        marginVertical: 6,
    },
    tileContainer: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    modalContainer: {
        marginVertical: 100,
        marginHorizontal: 30,
        borderRadius: 20,
        padding: 50,
        flex: 1,
        backgroundColor: '#E2E9FF',
        justifyContent: 'flex-start',
    },
    modalHeader: {
        borderBottomColor: '#333',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    formContainer: {

    }
})