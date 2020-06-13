import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {SafeAreaView} from "react-native-safe-area-context";
import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import SettingsModal from "../components/SettingsModal";

import {Icon} from "../components/VisualObjects";
import database, {ToDoTable, NotesTable, GoalsTable, SettingsTable} from '../services/Database';
const db = database();

function clearToDo() {
    ToDoTable.clear(db);
}
function clearNotes() {
    ToDoTable.clear(db);
}
function clearGoals() {
    ToDoTable.clear(db);
}
function clearSettings() {
    ToDoTable.clear(db);
}

function Item({title, expanded, setExpanded}) {
    const iconName = expanded ? 'chevron-up': 'chevron-down';
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.touchable} onPress={()=>setExpanded(!expanded)}>
                <Icon size={10} color='#000' name={iconName}/>
            </TouchableOpacity>
        </View>
    )
}

function SubItem({title}) {
    return (
        <View style={styles.subItem} >
            <Text>{title}</Text>
        </View>
    )
}

export default function ProfileScreen() {
    const [profileExpanded, setProfileExpanded] = useState(false);
    const [preferencesExpanded, setPreferencesExpanded] = useState(false);
    const [dataExpanded, setDataExpanded] = useState(false);

    return (
        <View style={styles.container}>
            <SettingsModal modalVisible={profileExpanded} setModalVisible={setProfileExpanded} />

            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/profile.jpg')} style={styles.image} />
                    <Text style={styles.greeting}> Greetings, Sawyer </Text>
                </View>
                <Item title='Profile' setExpanded={setProfileExpanded} expanded={profileExpanded} />
                <Item title='Preferences' setExpanded={setPreferencesExpanded} expanded={preferencesExpanded} />
                <Item title='Data' setExpanded={setDataExpanded} expanded={dataExpanded} />
                {dataExpanded && <SubItem title='Delete All Notes'/>}
                {dataExpanded && <SubItem title='Delete All Goals'/>}
                {dataExpanded && <SubItem title='Delete All ToDos'/>}
                {dataExpanded && <SubItem title='Delete All Data'/>}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',

    },
    contentContainer: {
        paddingTop: 30,
        marginHorizontal: '15%',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 50,
    },
    item: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignContent: 'center'
    },
    title: {

    },
    touchable: {
        alignContent: 'center'
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subItem: {
        marginLeft: 30,
        marginHorizontal: 5,
        backgroundColor: '#ddd',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 7,
        margin: 2,
    }
});
