import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useState } from 'react'

const Tab = createBottomTabNavigator()

function HomeTab() {
    const [chatNotificationCount, setChatNotificationCount] = useState(0)

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderWidth: 0.5,
                    borderRadius: 20,

                    margin: 10,
                    padding: 5,

                    position: 'absolute',
                },
            }}
        ></Tab.Navigator>
    )
}

export default HomeTab
