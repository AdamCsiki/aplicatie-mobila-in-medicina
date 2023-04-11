import { createStackNavigator } from '@react-navigation/stack'
import SetupScreen from '../../screens/SetupScreen/SetupScreen'

const Stack = createStackNavigator()

function SetupStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Setup" component={SetupScreen} />
        </Stack.Navigator>
    )
}

export default SetupStack
