import { createStackNavigator } from '@react-navigation/stack'
import FoodDiaryScreen from '../../screens/FoodDiaryScreen/FoodDiaryScreen'
import SearchFoodScreen from '../../screens/SearchFoodScreen/SearchFoodScreen'
import FoodScreen from '../../screens/FoodScreen/FoodScreen'
import { useTheme } from '@ui-kitten/components'
import CreateFoodScreen from '../../screens/CreateFoodScreen/CreateFoodScreen'

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
                component={FoodDiaryScreen}
                options={{ headerShown: false }}
            />
            <Screen
                name="Foods"
                component={SearchFoodScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Screen
                name="Details"
                // @ts-ignore
                component={FoodScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Screen name={'Create'} component={CreateFoodScreen} />
        </Navigator>
    )
}

export default DietStack
