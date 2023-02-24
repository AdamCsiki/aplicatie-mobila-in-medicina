import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import Profile from '../../screens/ProfileScreen/Profile'
import DietScreen from '../../screens/DietScreen/DietScreen'
import DietStack from '../DietStack/DietStack'

const RootBottomTabNav = createBottomTabNavigator()

const BottomTabBar = ({
    navigation,
    state,
}: {
    navigation: any
    state: any
}) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
        <BottomNavigationTab title="Profile" />
        <BottomNavigationTab title="Diet" />
    </BottomNavigation>
)

function RootStack() {
    return (
        <RootBottomTabNav.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={BottomTabBar}
        >
            <RootBottomTabNav.Screen name={'Profile'} component={Profile} />
            <RootBottomTabNav.Screen name={'Diet'} component={DietStack} />
        </RootBottomTabNav.Navigator>
    )
}

export default RootStack
