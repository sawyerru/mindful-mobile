import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import {globalStyles} from "../styles/globalStyles";
import NotesScreen from "../screens/NotesScreen";
import NotesDrawerContent from "../screens/sidemenu/NotesDrawerContent";

const NotesDrawer = createDrawerNavigator();

export default function NotesDrawerNavigation({navigation}) {

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