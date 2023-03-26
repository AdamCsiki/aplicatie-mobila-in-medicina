import { createStackNavigator } from '@react-navigation/stack'
import DietScreen from '../../screens/DietScreen/DietScreen'
import SearchFoodScreen from '../../screens/SearchFoodScreen/SearchFoodScreen'
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen'

const { Navigator, Screen } = createStackNavigator()

function DietStack() {
    return (
        <Navigator>
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
                options={{ headerShown: true }}
            />
        </Navigator>
    )
}

export default DietStack
