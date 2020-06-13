import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {TagColorConsts} from "../constants/NotesTags";
import { NotificationIcon } from "./VisualObjects";

export default function NotesCard({item}) {
    const tagColor = TagColorConsts[item.tag];
    return (
        <View style={{
            backgroundColor: tagColor,
            paddingLeft: 7,
            borderRadius: 10,
        }}>
            <View style={styles.contentContainer}>
                <View style={styles.cardHeader} >
                    <View style={styles.cardContext}>
                        <Text style={styles.item}>Context: </Text>
                        <Text style={styles.context}>{item.context}</Text>
                        <View style={styles.notify}>
                            {item.isReflected === 0 && <NotificationIcon />}
                        </View>
                    </View>
                </View>
                <Text>{item.feeling}</Text>
                <Text>{item.explanation}</Text>
                <Text>{item.lesson1}</Text>
                <Text>{item.lesson2}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingLeft: 4,
        backgroundColor: '#fff',
    },
    context: {
        fontSize: 20,
    },
    cardHeader: {
        // justifyContent: 'space-between',
        // flexDirection: 'row'
    },
    cardContext: {
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    notify: {
        justifyContent: 'flex-end'
    },
    item: {

    }
})