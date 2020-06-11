import React from "react";
import {Alert, Modal, Text, Button, View, TouchableOpacity} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {Icon} from "./Icon";
import database, {ToDoTable} from "../services/Database";
const db = database();


export default function ToDoListModal({setModalVisible, modalVisible, updateList}) {
    const clearTable = () => {
        ToDoTable.clear(db);
        ToDoTable.loadList(db, updateList)
    }
    return(
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={globalStyles.modalContainer}>
                <View style={globalStyles.modalHeader}>
                    <Text style={globalStyles.modalTitle}>ToDo Settings</Text>
                    <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} >
                        <Icon name='times' size={25} color='#FF0000' />
                    </TouchableOpacity>
                </View>
                <Button title='Clear All ToDos' onPress={clearTable} />
                <Button title='Clear Completed ToDos' onPress={clearTable}/>
            </View>
        </Modal>

    )
}