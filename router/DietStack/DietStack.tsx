import { createStackNavigator } from '@react-navigation/stack'
import DietScreen from '../../screens/DietScreen/DietScreen'
import SearchFoodScreen from '../../screens/SearchFoodScreen/SearchFoodScreen'
import FoodScreen from '../../screens/FoodScreen/FoodScreen'
import { useTheme } from '@ui-kitten/components'
import CreateFoodScreen from '../../screens/CreateFoodScreen/CreateFoodScreen'
import AddIngredients from '../../screens/CreateFoodScreen/AddIngredients'

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
            <Screen name="Foods" component={SearchFoodScreen} />
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
