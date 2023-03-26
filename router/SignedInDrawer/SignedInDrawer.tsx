import { createDrawerNavigator } from '@react-navigation/drawer'
import { Drawer, DrawerItem, IndexPath } from '@ui-kitten/components'
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen'
import RootBottomTab from '../MainTab/MainTab'

const { Navigator, Screen } = createDrawerNavigator()

const DrawerContent = ({
    navigation,
    state,
}: {
    navigation: any
    state: any
}) => {
    return (
        <Drawer
            selectedIndex={new IndexPath(state.index)}
            onSelect={(index) =>
                navigation.navigate(state.routeNames[index.row])
            }
        >
            <DrawerItem title="Home" />
            <DrawerItem title="Settings" />
        </Drawer>
    )
}

function SignedInDrawer({ navigation }: { navigation: any }) {
    return (
        <Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            detachInactiveScreens={true}
            screenOptions={{
                drawerPosition: 'right',
                headerShown: false,
            }}
        >
            <Screen name="Home" component={RootBottomTab} />
            <Screen name="Settings" component={SettingsScreen} />
        </Navigator>
    )
}

export { SignedInDrawer }
