import * as SecureStore from 'expo-secure-store'
import axios from '../api/axios'
import { LoginModel } from '../models/LoginModel'
import { Cookie } from 'tough-cookie'
import { AxiosResponse } from 'axios'
import { SignUpModel } from '../models/SignUpModel'
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    SET_USER,
} from '../redux/types/types'

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

                SecureStore.setItemAsync('user', JSON.stringify(user))
                SecureStore.setItemAsync(
                    'accessToken',
                    JSON.stringify(accessToken)
                )

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
    getStoredUser() {
        return SecureStore.getItemAsync('user')
            .then((user) => {
                if (!user) {
                    return {
                        type: SET_USER,
                        payload: {
                            user: undefined,
                        },
                    }
                }

                return {
                    type: SET_USER,
                    payload: {
                        user: JSON.parse(user),
                    },
                }
            })
            .catch((err) => {
                return {
                    type: SET_USER,
                    payload: {
                        user: undefined,
                    },
                }
            })
    }
}

export default new AuthService()
