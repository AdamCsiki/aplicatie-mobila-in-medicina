import * as SecureStore from 'expo-secure-store'
import axios, { jar } from '../api/axios'
import { LoginModel } from '../models/LoginModel'
import { Cookie } from 'tough-cookie'
import getHttpOnlyToken from '../misc/getHttpOnlyToken'
import { AxiosResponse } from 'axios'
import { SignUpModel } from '../models/SignUpModel'
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../redux/types/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActionModel } from '../models/ActionModel'
import { AuthStateModel } from '../models/AuthStateModel'

function setTokens(res: AxiosResponse) {
    if (!res.data.token) {
        return {
            accessToken: undefined,
            user: undefined,
            error: 'No access token.',
        }
    }

    if (!res.headers['set-cookie']) {
        return {
            accessToken: undefined,
            user: undefined,
            error: 'Set-cookie missing.',
        }
    }

    const accessToken = res.data.token

    // ! Adding the authorization token
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken

    const cookies = res.headers['set-cookie'].map((cookie) =>
        Cookie.parse(cookie)
    )

    if (!cookies[0]) {
        return {
            accessToken: undefined,
            user: undefined,
            error: 'Cookies missing.',
        }
    }

    SecureStore.setItemAsync('accessToken', accessToken)

    return { accessToken, user: res.data.id }
}

class AuthService {
    autoSignInOffline() {
        return SecureStore.getItemAsync('accessToken').then((accessToken) => {
            return {
                type: LOGIN_SUCCESS,
                accessToken: accessToken,
            }
        })
    }
    signIn({ email, password }: LoginModel) {
        return axios
            .post('/auth/signin', { email: email, password: password })
            .then((res) => {
                const { accessToken, user } = setTokens(res)

                return {
                    type: LOGIN_SUCCESS,
                    payload: {
                        accessToken: accessToken,
                        user: user,
                    },
                }
            })
            .catch((err) => {
                console.log('ERROR: ', err)
                return {
                    type: LOGIN_FAIL,
                }
            })
    }

    signOut() {
        return SecureStore.deleteItemAsync('accessToken')
            .then(() => {
                axios.defaults.headers.common['Authorization'] = null
                return {
                    type: LOGOUT,
                }
            })
            .then((err) => {
                axios.defaults.headers.common['Authorization'] = null

                console.log('ERROR: ', err)

                return {
                    type: LOGOUT,
                }
            })
    }

    signUp({ username, email, password }: SignUpModel) {
        return axios
            .post('/auth/register', { username, email, password })
            .then((res) => {})
    }

    refresh() {
        return axios.get('/auth/refresh').then((res) => {
            return setTokens(res)
        })
    }
}

export default new AuthService()
