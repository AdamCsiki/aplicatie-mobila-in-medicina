import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    BottomNavigation,
    BottomNavigationTab,
    useTheme,
} from '@ui-kitten/components'
import BodyScreen from '../../screens/BodyScreen/BodyScreen'
import DietStack from '../DietStack/DietStack'
import WeeklyStack from '../WeeklyStack/WeeklyStack'
import PlanScreen from '../../screens/PlanScreen/PlanScreen'

const Tab = createBottomTabNavigator()

function BottomTabBar({ navigation, state }: { navigation: any; state: any }) {
    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            <BottomNavigationTab title="BODY" />
            <BottomNavigationTab title="PLAN" />
            <BottomNavigationTab title="DIET" />
        </BottomNavigation>
    )
}

function HomeTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleStyle: { fontWeight: 'bold', fontSize: 800 },
            }}
            tabBar={BottomTabBar}
        >
            <Tab.Screen name={'Body'} component={BodyScreen} />
            <Tab.Screen name={'Plan'} component={PlanScreen} />
            <Tab.Screen name={'Diet'} component={DietStack} />
        </Tab.Navigator>
    )
}

export default HomeTab
