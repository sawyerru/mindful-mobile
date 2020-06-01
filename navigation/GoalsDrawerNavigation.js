import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import {globalStyles} from "../styles/globalStyles";
import GoalsScreen from "../screens/GoalsScreen";
import GoalsDrawerContent from "../screens/sidemenu/GoalsDrawerContent";
import {DrawerMenuIcon} from "../components/Header";

const GoalsDrawer = createDrawerNavigator();

export default function GoalsDrawerNavigation({navigation}) {
    // navigation.setOptions({
    //     headerTitle: "CCCC",
    //     headerRight: null,
    //     headerLeft: () => <DrawerMenuIcon navigation={navigation} />,
    //     headerStyle: globalStyles.header
    // });

    return (
        <GoalsDrawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent= { () => <GoalsDrawerContent /> }
        >
            <GoalsDrawer.Screen name="Goals" component={GoalsScreen}/>
        </GoalsDrawer.Navigator>

    )
}