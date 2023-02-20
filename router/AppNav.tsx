import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import AuthStack from './AuthStack/AuthStack'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LOGIN_SUCCESS } from '../redux/types/types'

function AppNav() {
    return (
        <NavigationContainer>
            <StatusBar hidden style="auto" animated={true} />
            <AuthStack />
        </NavigationContainer>
    )
}

export default AppNav
