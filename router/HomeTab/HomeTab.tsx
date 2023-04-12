import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import Profile from '../../screens/ProfileScreen/Profile'
import DietStack from '../DietStack/DietStack'
import WeeklyStack from '../WeeklyStack/WeeklyStack'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import SetupMacroScreen from '../../screens/SetupMacroScreen/SetupMacroScreen'
import { DietModel } from '../../models/DietModel'
import SetupStack from '../SetupStack/SetupStack'
import { useEffect, useState } from 'react'
import { getMaxMacros } from '../../redux/actions/dietActions'
import { DEFAULT_MACROS, DEFAULT_MAX_MACROS } from '../../redux/types/types'

const Tab = createBottomTabNavigator()

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

function checkMacros(diet: any) {
    return (
        diet.maxCals <= 0 ||
        (diet.maxFats <= 0 && diet.maxCarbs <= 0 && diet.maxProteins <= 0)
    )
}

function HomeTab() {
    const diet = useSelector((state: RootState) => state.diet)
    const dispatch = useDispatch()

    const [isSetup, setIsSetup] = useState(false)

    useEffect(() => {
        getMaxMacros().then((action) => {
            dispatch(action)
        })
    }, [])

    useEffect(() => {
        if (checkMacros(diet)) {
            setIsSetup(true)
        } else {
            setIsSetup(false)
        }
    }, [diet])

    if (isSetup) {
        return <SetupStack />
    }

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
