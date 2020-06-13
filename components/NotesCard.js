import React, {useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {TagColorConsts} from "../constants/NotesTags";
import { Icon, NotificationIcon } from "./VisualObjects";


export default function NotesCard({item}) {
    const [openNote, setNoteOpen] = useState(false);

    const expandNote = () => {

    }
    const tagColor = TagColorConsts[item.tag];
    return (
        <View style={{
            backgroundColor: tagColor,
            paddingLeft: 7,
            borderRadius: 10,
        }}>
            <View style={styles.contentContainer}>
                <View style={styles.cardHeader} >
                    <Text style={styles.item}>Context: </Text>
                    <Text style={styles.text}>{item.context}</Text>
                    <Text style={styles.item}>Feeling: </Text>
                    <Text style={styles.text}>{item.context}</Text>
                    <Text style={styles.item}>Explanation: </Text>
                    <Text style={styles.text}>{item.context}</Text>
                </View>

                {item.isReflected === 1 && item.lesson1 && <Text>{item.lesson1}</Text> }
                {item.isReflected === 1 && item.lesson2 && <Text>{item.lesson2}</Text> }
                <TouchableOpacity style={styles.edit} onPress={expandNote}>
                    <Icon name="pencil" size={20} color='#333' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingLeft: 4,
        backgroundColor: '#fff',
    },
    text: {
        marginLeft: 10,
        fontSize: 15,
    },
    cardHeader: {
        // justifyContent: 'space-between',
        // flexDirection: 'row'
    },
    cardContext: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    notify: {
        justifyContent: 'flex-end'
    },
    item: {
        color: '#ddd'
    },
    edit: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})