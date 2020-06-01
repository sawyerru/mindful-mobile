import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import {globalStyles} from "../styles/globalStyles";
import NotesScreen from "../screens/NotesScreen";
import NotesDrawerContent from "../screens/sidemenu/NotesDrawerContent";
import {DrawerMenuIcon, ProfileIcon} from "../components/Header";


const NotesDrawer = createDrawerNavigator();

export default function NotesDrawerNavigation({navigation}) {
    // navigation.setOptions({
    //     headerTitle: "AAAA",
    //     headerRight: null,
    //     headerLeft: () => <DrawerMenuIcon navigation={navigation} />,
    //     headerStyle: globalStyles.header
    // });

    return (
        <NotesDrawer.Navigator
            screenOptions={{
                headerShown: false
            }}

            drawerContent= { () => <NotesDrawerContent /> }
        >
            <NotesDrawer.Screen name="Notes" component={NotesScreen}/>
        </NotesDrawer.Navigator>

    )
}