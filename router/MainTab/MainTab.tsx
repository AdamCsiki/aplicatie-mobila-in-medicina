import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import Profile from '../../screens/ProfileScreen/Profile'
import DietScreen from '../../screens/DietScreen/DietScreen'
import DietStack from '../DietStack/DietStack'
import WeeklyStack from '../WeeklyStack/WeeklyStack'

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
        <BottomNavigationTab title="Weekly" />
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
            <RootBottomTabNav.Screen name={'Weekly'} component={WeeklyStack} />
        </RootBottomTabNav.Navigator>
    )
}

export default RootStack
