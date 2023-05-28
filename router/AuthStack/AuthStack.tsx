import { createStackNavigator } from '@react-navigation/stack'
import SignedOutStack from '../SignedOutStack/SignedOutStack'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import SplashScreen from '../../screens/SplashScreen/SplashScreen'
import { SignedInDrawer } from '../SignedInDrawer/SignedInDrawer'
import * as SecureStore from 'expo-secure-store'
import axios from '../../api/axios'
import { offlineSignedIn, signOut } from '../../redux/actions/authActions'

// ! Authorization stack begins here
const Stack = createStackNavigator()

function AuthStack() {
    const auth = useSelector((state: RootState) => state.auth)
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        offlineSignedIn()
            .then((action) => {
                dispatch(action)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    // ! Interceptor to refresh token
    axios.interceptors.response.use(
        (res) => {
            return Promise.resolve(res)
        },
        (err) => {
            const { message, config } = err

            console.log('Message: ', message)
            console.log('Config: ', config)

            if (!err) {
                console.log('Backend offline!')
                return Promise.reject(err)
            }

            if (!err.response) {
                console.log('Error response missing.')
                return Promise.reject(err)
            }

            if (err.response.status === 498 && !config._retry) {
                console.log('Attempting refresh.')
                config._retry = true

                return axios.get('/auth/refresh').then((res) => {
                    console.log('Response: ', res)
                    axios.defaults.headers.common['Authorization'] =
                        'Bearer ' + res.data.token

                    SecureStore.setItemAsync('accessToken', res.data.token)

                    return axios({
                        ...config,
                        headers: { Authorization: 'Bearer ' + res.data.token },
                    })
                })
            }

            if (err.response.status == 401 && !config._retry) {
                config._retry = true

                signOut().then((action) => {
                    dispatch(action)
                })
            }

            return Promise.reject(err)
        }
    )

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {loading ? (
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
            ) : auth.accessToken ? (
                <Stack.Screen name="SignedIn" component={SignedInDrawer} />
            ) : (
                <Stack.Screen name="SignedOut" component={SignedOutStack} />
            )}
        </Stack.Navigator>
    )
}

export default AuthStack
