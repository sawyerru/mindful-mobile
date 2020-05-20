import React from 'react';
import {Text, StyleSheet, View} from "react-native";

let HEADER = 'Dashboard';

export default function Header(){
    return(
        <View style={styles.headerBar}>
            <Text style={styles.title}> {HEADER} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBar: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#3498db',
        marginTop: 50,
        height: 40,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
})