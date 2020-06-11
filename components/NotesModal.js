import React from "react";
import {
    Alert, Modal, Text, View, TouchableOpacity,
    TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {Icon} from './Icon';
import { Formik } from 'formik';

export default function NotesModal({setModalVisible, modalVisible}) {
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
        <TouchableWithoutFeedback onPress={ ()=> {
            Keyboard.dismiss();
        }}>
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
                            <Icon name='times' size={25} color='#FF0000' />
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.formContainer}>
                        <Formik
                            initialValues={{context: '', feeling: '', explanation: ''}}
                            onSubmit={ (values) => {
                                console.log(values);}
                            }
                        >
                            {(formikProps) => (
                                <View>
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
                                        multiline
                                    />
                                </View>
                            )}

                        </Formik>
                    </View>
                </View>
            </Modal>
        </TouchableWithoutFeedback>


    )
}

const styles = StyleSheet.create({
    contextInput: {},
    feelingInput:{},
    explanationInput: {},
})