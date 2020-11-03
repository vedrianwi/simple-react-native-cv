import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//import screens 
import AccountScreen from '../screens/account'
import HomeScreen from '../screens/home'


// setup tab navigator
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="account" component={AccountScreen}/>
            <Tab.Screen name="home" component={HomeScreen}/>
        </Tab.Navigator>
    )
}

export default TabNavigator