import React from "react";
import {Alert, Modal, Text, Button, View, TouchableOpacity} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {Icon} from "./Icon";

export default function GoalsModal({setModalVisible, modalVisible}) {
    const closeModal = () => {
        Alert.alert(
            'Are you sure?',
            '',
            [
                {
                    text: 'Yes',
                    onPress: () => setModalVisible(!modalVisible),
                    style: 'destructive'
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
            ],
            { cancelable: false })
    }
    return(
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={globalStyles.modalContainer}>
                <View style={globalStyles.modalHeader}>
                    <Text style={globalStyles.modalTitle}>Goal Step</Text>
                    <TouchableOpacity onPress={closeModal} >
                        <Icon name='times' size={25} color='#FF0000' />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    )
}