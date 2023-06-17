import { createDrawerNavigator } from '@react-navigation/drawer'
import {
    Button,
    Drawer,
    DrawerItem,
    IndexPath,
    Layout,
    useTheme,
} from '@ui-kitten/components'
import HomeTab from '../HomeTab/HomeTab'
import SettingsStack from '../SettingsStack/SettingsStack'
import React, { useEffect, useState } from 'react'
import { signOut } from '../../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getMaxMacros } from '../../redux/actions/dietActions'
import SplashScreen from '../../screens/SplashScreen/SplashScreen'
import SetupStack from '../SetupStack/SetupStack'
import { getBodyInfo } from '../../redux/actions/bodyActions'
import { SETUP_IS_DONE } from '../../redux/types/types'
import { StatusBar } from 'react-native'
import { isSetupDone } from '../../redux/actions/setupActions'
import { getStoredMealsToState } from '../../redux/actions/foodActions'

const { Navigator, Screen } = createDrawerNavigator()

const DrawerContent = ({ navigation, state }: any) => {
    const dispatch = useDispatch()

    return (
        <Drawer
            selectedIndex={new IndexPath(state.index)}
            onSelect={(index) =>
                navigation.navigate(state.routeNames[index.row])
            }
            style={{ paddingTop: StatusBar.currentHeight }}
            footer={() => (
                <Layout
                    style={{
                        width: '100%',
                        padding: 8,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button
                        onPress={() => {
                            signOut().then((action) => {
                                dispatch(action)
                            })
                        }}
                    >
                        Logout
                    </Button>
                </Layout>
            )}
        >
            <DrawerItem title="Home" />
            <DrawerItem title="Settings" />
        </Drawer>
    )
}

function SignedInDrawer() {
    const theme = useTheme()

    const dispatch = useDispatch()

    const diet = useSelector((state: RootState) => state.diet)
    const body = useSelector((state: RootState) => state.body)

    const [isLoading, setIsLoading] = useState(true)

    // ! LOADING THE STATES FROM MEMORY
    // ? it is ugly, it is horrendous, do not touch it
    // ? it's a multistep loading, so everything loads nice and easy
    // ? after everything is loaded then it stops the loading screen
    useEffect(() => {
        isSetupDone().then((action) => {
            dispatch(action)
            if (action.type == SETUP_IS_DONE) {
                getMaxMacros()
                    .then((action) => {
                        dispatch(action)
                    })
                    .then(() => {
                        getBodyInfo()
                            .then((action) => {
                                dispatch(action)
                            })
                            .then(() => {
                                setIsLoading(false)
                            })
                        getStoredMealsToState().then((action) => {
                            dispatch(action)
                        })
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    if (isLoading) {
        return <SplashScreen />
    }

    if (!diet.isSetup) {
        return <SetupStack />
    }

    return (
        <Navigator
            initialRouteName={'Home'}
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme['background-basic-color-1'],
                },
                headerTintColor: theme['text-basic-color'],
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Screen
                name="Home"
                component={HomeTab}
                options={{ headerTitle: () => null }}
            />
            <Screen name="Settings" component={SettingsStack} />
        </Navigator>
    )
}

export { SignedInDrawer }
