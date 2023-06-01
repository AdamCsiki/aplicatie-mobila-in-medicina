import { createStackNavigator } from '@react-navigation/stack'
import SetupMacroScreen from '../../screens/SetupMacroScreen/SetupMacroScreen'
import SetupBodyScreen from '../../screens/SetupBodyScreen/SetupBodyScreen'
import SetupPlanScreen from '../../screens/SetupPlanScreen/SetupPlanScreen'

const Stack = createStackNavigator()

function SetupStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: 'Setup',
            }}
        >
            <Stack.Screen name="SetupBody" component={SetupBodyScreen} />
            <Stack.Screen name="SetupPlan" component={SetupPlanScreen} />
            <Stack.Screen name="SetupMacro" component={SetupMacroScreen} />
        </Stack.Navigator>
    )
}

export default SetupStack
