import React, {useState, useEffect} from 'react';
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Tile from "../components/Tile";
import NotesCard from "../components/NotesCard";
import database, {NotesTable} from "../services/Database";
import {globalStyles} from "../styles/globalStyles";
import AddNotesModal from "../components/AddNotesModal";
const db = database();

export default function NotesScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [notes, updateNotes] = useState([]);

    useEffect( ()=> {
            NotesTable.loadNotes(db, updateNotes);
        },
    []);



    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Button title="Filters" onPress={()=> navigation.openDrawer()}/>
            <Button title="Add Note" onPress={()=>setModalVisible(!modalVisible)} />
            <Button title="Purge" onPress={()=>NotesTable.clear(db)} />
            <Button title="view notes" onPress={()=> {
                console.log(notes);
                NotesTable.loadNotes(db, updateNotes);
            }} />

        </View>
        <AddNotesModal setModalVisible={setModalVisible} modalVisible={modalVisible} />
        <FlatList
            style={styles.notesContainer}
            data={notes}
            renderItem={
                ({item}) => (
                    <Tile notify={false} className={globalStyles.tile}>
                        <NotesCard item={item}/>
                    </Tile>
                )
            }
            />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    header: {
        backgroundColor: '#fafafa',
        height: '5%',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    notesContainer: {
        paddingHorizontal: 10,
    }
});
