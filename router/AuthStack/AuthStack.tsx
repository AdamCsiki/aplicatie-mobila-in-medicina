import { createStackNavigator } from '@react-navigation/stack'
import SignedOutStack from '../SignedOutStack/SignedOutStack'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { LOGIN_SUCCESS } from '../../redux/types/types'
import SplashScreen from '../../screens/SplashScreen/SplashScreen'
import { SignedInDrawer } from '../SignedInDrawer/SignedInDrawer'
import * as SecureStore from 'expo-secure-store'
import axios from '../../api/axios'
import { refresh } from '../../redux/actions/authActions'

//
//
//
//
//
//
//
//
//
//
//
// ! Interceptor to refresh token
axios.interceptors.response.use(
    (res) => {
        return Promise.resolve(res)
    },
    (err) => {
        const { message, config } = err

        console.log('Message: ', message)

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
                axios.defaults.headers.common['Authorization'] =
                    'Bearer ' + res.data.token

                SecureStore.setItemAsync('accessToken', res.data.token)

                return axios({
                    ...config,
                    headers: { Authorization: 'Bearer ' + res.data.token },
                })
            })
        }
        return Promise.reject(err)
    }
)
//
//
//
//
//
//
//
//
//
//
//

// ! Authorization stack begins here
const Auth = createStackNavigator()

function AuthStack() {
    const auth = useSelector((state: RootState) => state.auth)
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        SecureStore.getItemAsync('accessToken')
            .then((accessToken) => {
                console.log('TOKEN FROM SECURE_STORE: ', accessToken)
                if (accessToken) {
                    axios.defaults.headers.common['Authorization'] =
                        'Bearer ' + accessToken
                    refresh().then((res) => {
                        dispatch(res)
                    })
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
        setLoading(false)
    }, [])

    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {loading ? (
                <Auth.Screen name="SplashScreen" component={SplashScreen} />
            ) : auth.accessToken ? (
                <Auth.Screen name="SignedIn" component={SignedInDrawer} />
            ) : (
                <Auth.Screen name="SignedOut" component={SignedOutStack} />
            )}
        </Auth.Navigator>
    )
}

export default AuthStack
