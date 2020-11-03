import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// import screens
import LoginScreen from '../screens/login'

// import drawer navigation 
import DrawerNavigation from './drawer'

// setup stack navigator
const Stack = createStackNavigator()

const StackNavigator = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name ="login" component={LoginScreen}/>
            <Stack.Screen name="drawer-nav" component={DrawerNavigation}/>
        </Stack.Navigator>
    )
}

export default StackNavigator
