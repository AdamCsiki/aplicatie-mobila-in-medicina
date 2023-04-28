import { createStackNavigator } from '@react-navigation/stack'
import DietScreen from '../../screens/DietScreen/DietScreen'
import SearchFoodScreen from '../../screens/SearchFoodScreen/SearchFoodScreen'
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen'
import { useTheme } from '@ui-kitten/components'

const { Navigator, Screen } = createStackNavigator()

function DietStack() {
    const theme = useTheme()

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: theme['background-basic-color-1'],
                },
                headerTintColor: theme['text-basic-color'],
            }}
        >
            <Screen
                name="DietScreen"
                component={DietScreen}
                options={{ headerShown: false }}
            />
            <Screen
                name="Foods"
                component={SearchFoodScreen}
                options={{ headerShown: true }}
            />
            <Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    headerShown: true,
                }}
            />
        </Navigator>
    )
}

export default DietStack
