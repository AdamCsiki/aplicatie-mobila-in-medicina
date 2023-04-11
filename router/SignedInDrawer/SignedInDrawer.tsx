import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeTab from '../HomeTab/HomeTab'
import SettingsStack from '../SettingsStack/SettingsStack'

const Drawer = createDrawerNavigator()

function SignedInDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName={'Home'}
            screenOptions={{ headerShown: false, drawerPosition: 'right' }}
        >
            <Drawer.Screen name="Home" component={HomeTab} />
            <Drawer.Screen name="Settings" component={SettingsStack} />
        </Drawer.Navigator>
    )
}

export { SignedInDrawer }
