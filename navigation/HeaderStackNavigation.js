import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {globalStyles} from "../styles/globalStyles";

const HeaderStack = createStackNavigator();

export default function HeaderStackNavigation({navigation}) {
    return (
        <HeaderStack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: globalStyles.header
            }}>
            <HeaderStack.Screen name="Home" component={HomeScreen}/>
            <HeaderStack.Screen name="Profile" component={ProfileScreen} />
        </HeaderStack.Navigator>

    )
}

