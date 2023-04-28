import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    BottomNavigation,
    BottomNavigationTab,
    useTheme,
} from '@ui-kitten/components'
import Profile from '../../screens/ProfileScreen/Profile'
import DietStack from '../DietStack/DietStack'
import WeeklyStack from '../WeeklyStack/WeeklyStack'

const Tab = createBottomTabNavigator()

function BottomTabBar({ navigation, state }: { navigation: any; state: any }) {
    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            <BottomNavigationTab title="Profile" />
            <BottomNavigationTab title="Diet" />
        </BottomNavigation>
    )
}

function HomeTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={BottomTabBar}
        >
            <Tab.Screen name={'Profile'} component={Profile} />
            <Tab.Screen name={'Diet'} component={DietStack} />
            <Tab.Screen name={'Weekly'} component={WeeklyStack} />
        </Tab.Navigator>
    )
}

export default HomeTab
