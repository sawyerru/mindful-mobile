import React, {useState} from "react";
import {
    Alert, Modal, Text, View, TouchableOpacity,
    TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView, Button
} from 'react-native';
// import {Picker} from '@react-native-community/picker';
import {Picker } from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {VisualObjects} from './VisualObjects';
import { Formik } from 'formik';
import database, {NotesTable} from "../services/Database";
const db = database();

export default function NotesModal({setModalVisible, modalVisible}) {
    const [tag, updateTag] = useState('');

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={globalStyles.modalContainer}>
                        <View style={globalStyles.modalHeader}>
                            <Text style={globalStyles.modalTitle}>Quick Note</Text>
                            <TouchableOpacity onPress={closeModal} >
                                <VisualObjects name='times' size={25} color='#FF0000' />
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={globalStyles.formContainer}>
                            <Formik
                                initialValues={{tag: '', context: '', feeling: '', explanation: ''}}
                                onSubmit={ (values) => {
                                    values['tag'] = tag;
                                    NotesTable.addNote(db, values);
                                    setModalVisible(!modalVisible);
                                    }
                                }
                            >
                                {(formikProps) => (
                                    <View>
                                        <Picker
                                            mode='dropdown'
                                            selectedValue={tag}
                                            onValueChange={(itemValue, itemIndex) => {
                                                updateTag(itemValue);}}
                                        >
                                            <Picker.Item label="Work" value="work" />
                                            <Picker.Item label="Significant Other" value="sigother" />
                                            <Picker.Item label="Friends" value="friends" />
                                            <Picker.Item label="Family" value="family" />
                                            <Picker.Item label="Other" value="other" />
                                        </Picker>
                                        <TextInput
                                            style={styles.contextInput}
                                            placeholder='Context'
                                            onChangeText={formikProps.handleChange('context')}
                                            value={formikProps.values.context}
                                        />
                                        <TextInput
                                            style={styles.feelingInput}
                                            placeholder='Feeling'
                                            onChangeText={formikProps.handleChange('feeling')}
                                            value={formikProps.values.feeling}
                                        />
                                        <TextInput
                                            style={styles.explanationInput}
                                            placeholder='Explanation'
                                            onChangeText={formikProps.handleChange('explanation')}
                                            value={formikProps.values.explanation}
                                            multiline={true}
                                        />
                                        <Button title='Submit' onPress={formikProps.handleSubmit}/>
                                    </View>
                                )}
                            </Formik>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        </TouchableWithoutFeedback>


    )
}

const styles = StyleSheet.create({
    contextInput: {
        borderWidth: 2,
        borderColor: '#000',
        padding: 15
    },
    feelingInput:{
        borderWidth: 2,
        borderColor: '#000',
        padding: 15

    },
    explanationInput: {
        borderWidth: 2,
        borderColor: '#000',
        padding: 15

    },
})