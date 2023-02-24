import { createStackNavigator } from '@react-navigation/stack'
import DietScreen from '../../screens/DietScreen/DietScreen'
import SearchScreen from '../../screens/SearchScreen/SearchScreen'
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
                component={SearchScreen}
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
