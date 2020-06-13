import React from 'react';
import {Text, StyleSheet, View, Platform, TouchableOpacity} from "react-native";
import {VisualObjects} from './VisualObjects';
import { useIsDrawerOpen } from '@react-navigation/drawer';


export const ProfileIcon = ({navigation}) => {
    return (
        <View style={styles.profileIcon}>
            <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                <VisualObjects name='user-circle' size={25} color='#000'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBar: {
        justifyContent: 'space-between',
        backgroundColor: '#3498db',
        marginTop: Platform.OS === 'ios' ? 45 : 0,
        flexDirection: 'row',
        padding: '2.2%',
    },
    title: {
        alignSelf: 'center'
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileIcon: {
        padding: 10
    },
    about: {
    }
})