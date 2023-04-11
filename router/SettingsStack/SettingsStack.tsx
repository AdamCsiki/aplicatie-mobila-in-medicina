import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen'

const Stack = createStackNavigator()

function SettingsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={SettingsScreen} />
        </Stack.Navigator>
    )
}

export default SettingsStack
