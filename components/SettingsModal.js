import React from "react";
import {Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Keyboard} from "react-native";

import {globalStyles} from "../styles/globalStyles";
import database, {SettingsTable} from "../services/Database";
import {Icon} from "./VisualObjects";
const db = database();

export default function ProfileModal ({modalVisible, setModalVisible}) {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                >
                <View style={globalStyles.modalContainer}>
                    <View style={globalStyles.modalHeader}>
                        <Text style={globalStyles.modalTitle} >Update Profile</Text>
                        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} >
                            <Icon name='times' size={25} color='#FF0000' />
                        </TouchableOpacity>
                    </View>
                </View>

                </Modal>
            </View>
        </TouchableWithoutFeedback>
    )
}