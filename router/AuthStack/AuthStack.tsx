import { createStackNavigator } from '@react-navigation/stack'
import SignedOutStack from '../SignedOutStack/SignedOutStack'
import { useEffect, useState } from 'react'
import SignedInStack from '../SIgnedInStack/SignedInStack'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LOGIN_SUCCESS } from '../../redux/types/types'
import SplashScreen from '../../screens/SplashScreen/SplashScreen'

const Auth = createStackNavigator()

function AuthStack() {
    const auth = useSelector((state: RootState) => state.auth)
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        AsyncStorage.multiGet(['token', 'refresh']).then((data) => {
            const token = data[0][1]
            const refresh = data[1][1]

            dispatch({
                type: LOGIN_SUCCESS,
                payload: { token: token, refresh: refresh },
            })
            setLoading(false)
        })
    }, [])

    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {loading ? (
                <Auth.Screen name="SplashScreen" component={SplashScreen} />
            ) : auth.token && auth.refresh ? (
                <Auth.Screen name="SignedIn" component={SignedInStack} />
            ) : (
                <Auth.Screen name="SignedOut" component={SignedOutStack} />
            )}
        </Auth.Navigator>
    )
}

export default AuthStack
