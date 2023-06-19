import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import BodyScreen from '../../screens/BodyScreen/BodyScreen'
import DiaryStack from '../DiaryStack/DiaryStack'
import PlanScreen from '../../screens/PlanScreen/PlanScreen'

const Tab = createBottomTabNavigator()

function BottomTabBar({ navigation, state }: { navigation: any; state: any }) {
    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            <BottomNavigationTab title="Body Info" />
            <BottomNavigationTab title="Weight Plan" />
            <BottomNavigationTab title="Food Diary" />
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
            <Tab.Screen name={'Diary'} component={DiaryStack} />
        </Tab.Navigator>
    )
}

export default HomeTab
