import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

// import screen 
import ProfileScreen from '../screens/profile'
import AccountScreen from '../screens/account'

// import tab navigation
import TabNavigation from './tab' 
//setup drawer navigation
const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="profiles" component={ProfileScreen}/>
            <Drawer.Screen name="account" component={TabNavigation}/>
        </Drawer.Navigator>
    )
}

 export default DrawerNavigation