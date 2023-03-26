import { createStackNavigator } from '@react-navigation/stack'
import WeeklySportsScreen from '../../screens/WeeklySportsScreen/WeeklySportsScreen'

const Stack = createStackNavigator()

function WeeklyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Sports" component={WeeklySportsScreen} />
        </Stack.Navigator>
    )
}

export default WeeklyStack
