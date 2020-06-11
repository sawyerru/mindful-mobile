import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {SafeAreaView} from "react-native-safe-area-context";
import * as React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

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

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/empty.png')} style={styles.image} />
                </View>
                <View style={styles.interactionArea}>
                    <Button title="CLEAR ToDo TABLE" onPress={clearToDo} />
                </View>
                <View style={styles.interactionArea}>
                    <Button title="CLEAR Notes TABLE" onPress={clearNotes} />
                </View>
                <View style={styles.interactionArea}>
                    <Button title="CLEAR Goals TABLE" onPress={clearGoals} />
                </View>
                <View style={styles.interactionArea}>
                    <Button title="CLEAR Settings TABLE" onPress={clearSettings} />
                </View>
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
    interactionArea: {
        borderColor: 'black',
        borderWidth: 2,
    },
});
