import { createDrawerNavigator } from '@react-navigation/drawer'
import {
    Button,
    Drawer,
    DrawerItem,
    IndexPath,
    Layout,
    Text,
} from '@ui-kitten/components'
import HomeTab from '../HomeTab/HomeTab'
import SettingsStack from '../SettingsStack/SettingsStack'
import React from 'react'
import { signOut } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'

const { Navigator, Screen } = createDrawerNavigator()

const DrawerContent = ({ navigation, state }: any) => {
    const dispatch = useDispatch()

    return (
        <Drawer
            selectedIndex={new IndexPath(state.index)}
            onSelect={(index) =>
                navigation.navigate(state.routeNames[index.row])
            }
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
    return (
        <Navigator
            initialRouteName={'Home'}
            screenOptions={{ headerShown: false, drawerPosition: 'right' }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Screen name="Home" component={HomeTab} />
            <Screen name="Settings" component={SettingsStack} />
        </Navigator>
    )
}

export { SignedInDrawer }
