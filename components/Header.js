import React from 'react';
import {Text, StyleSheet, View, Platform, TouchableOpacity} from "react-native";
import {Icon} from './Icon';
import { useIsDrawerOpen } from '@react-navigation/drawer';


export const ProfileIcon = ({navigation}) => {
    return (
        <View style={styles.profileIcon}>
            <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                <Icon name='user-circle' size={25} color='#000'/>
            </TouchableOpacity>
        </View>
    )
}

const handleMenuPress = () => {
    alert("MENU PRESSED")
}

const renderIcon = ({navigation}) => {
    const isDrawerOpen = useIsDrawerOpen();
    if (isDrawerOpen) {
        return (
            <TouchableOpacity onPress={()=> navigation.closeDrawer()}>
                <Icon name='chevron-left' size={25} color='#000'/>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                <Icon name='bars' size={25} color='#000'/>
            </TouchableOpacity>
        )
    }

}
export const DrawerMenuIcon = ({navigation}) => {
    return (
        <View style={styles.profileIcon}>
            {renderIcon({navigation})}
            {/*<TouchableOpacity >*/}
            {/*    <Icon name='bars' size={25} color='#000'/>*/}
            {/*</TouchableOpacity>*/}
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