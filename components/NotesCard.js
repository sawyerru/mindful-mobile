import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {TagColorConsts} from "../constants/NotesTags";


export default function NotesCard({item}) {
    const tagColor = TagColorConsts[item.tag];
    return (
        <View style={styles.contentContainer}>
            <View style={{width: 5, backgroundColor: tagColor}}/>
            <Text>{item.context}</Text>
            <Text>{item.feeling}</Text>
            {item.isReflected === 1 && <Text>Completed</Text>}
            <Text>{item.explanation}</Text>
            <Text>{item.tag}</Text>
            <Text>{item.lesson1}</Text>
            <Text>{item.lesson2}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        // backgroundColor: 'red'
    },

})