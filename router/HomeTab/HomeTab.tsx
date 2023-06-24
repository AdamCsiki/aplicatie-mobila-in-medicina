import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    BottomNavigation,
    BottomNavigationTab,
    useTheme,
} from '@ui-kitten/components'
import BodyScreen from '../../screens/BodyScreen/BodyScreen'
import DiaryStack from '../DiaryStack/DiaryStack'
import PlanScreen from '../../screens/PlanScreen/PlanScreen'

const Tab = createBottomTabNavigator()

function BottomTabBar({
    navigation,
    state,
    color,
}: {
    navigation: any
    state: any
    color: string
}) {
    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
            style={{
                borderColor: color,
                borderTopWidth: 1,
            }}
        >
            <BottomNavigationTab title="Body Info" />
            <BottomNavigationTab title="Weight Plan" />
            <BottomNavigationTab title="Food Diary" />
        </BottomNavigation>
    )
}

function HomeTab() {
    const theme = useTheme()

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 800,
                },
            }}
            tabBar={(props) => {
                return (
                    <BottomTabBar
                        {...props}
                        color={theme['border-basic-color-4']}
                    />
                )
            }}
        >
            <Tab.Screen name={'Body'} component={BodyScreen} />
            <Tab.Screen name={'Plan'} component={PlanScreen} />
            <Tab.Screen name={'Diary'} component={DiaryStack} />
        </Tab.Navigator>
    )
}

export default HomeTab
