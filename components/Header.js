import React from 'react';
import {Text, StyleSheet, View} from "react-native";

export default function Header(){
    return(
        <View style={styles.headerBar}>
            <Text> HEADER </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBar: {
        alignSelf: 'stretch',
        textAlign: 'center',
        backgroundColor: '#3498db'
    }
})