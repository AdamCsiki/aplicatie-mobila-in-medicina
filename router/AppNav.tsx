import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import AuthStack from './AuthStack/AuthStack'

function AppNav() {
    return (
        <NavigationContainer>
            <StatusBar hidden style="auto" animated={true} />
            <AuthStack />
        </NavigationContainer>
    )
}

export default AppNav
