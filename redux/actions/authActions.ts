import AuthService from '../../services/AuthService'
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    OFFLINE,
    OFFLINE_LOGGED_IN,
    OFFLINE_LOGGED_OUT,
    REFRESH_SUCCESS,
} from '../types/types'
import { LoginModel } from '../../models/LoginModel'
import * as SecureStore from 'expo-secure-store'
import { SignUpModel } from '../../models/SignUpModel'
import axios from '../../api/axios'

function failAction(error: any) {
    if (error.message === 'timeout of 3000ms exceeded') {
        console.log('SERVER OFFLINE!')
        return { type: OFFLINE }
    }
    console.log('action: LOGIN FAIL')
    return {
        type: LOGIN_FAIL,
        payload: {
            accessToken: null,
            error: JSON.stringify(error),
        },
    }
}

export const signIn = ({ email, password }: LoginModel) => {
    console.log('action: SIGN IN')
    return AuthService.signIn({ email, password })
        .then((res: any) => {
            SecureStore.setItemAsync('user', `${res.user}`)
            return SecureStore.getItemAsync('accessToken').then(
                (accessToken) => {
                    return {
                        type: LOGIN_SUCCESS,
                        payload: {
                            accessToken: accessToken,
                            user: res.user,
                        },
                    }
                }
            )
        })
        .catch((err) => {
            return failAction(err)
        })
}

export const signOut = () => {
    console.log('action: SIGN OUT')
    return AuthService.signOut()
        .then(() => {
            return {
                type: LOGOUT,
            }
        })
        .catch((err) => {
            return failAction(err)
        })
}

export const signUp = ({ username, email, password }: SignUpModel) => {
    console.log('action: SIGN UP')
    return AuthService.signUp({ username, email, password })
        .catch((err) => {
            console.log(err.message)
        })
        .catch((err) => {
            return failAction(err)
        })
}

export const offlineSignedIn = () => {
    return SecureStore.getItemAsync('accessToken')
        .then((accessToken) => {
            console.log('TOKEN FROM SECURE_STORE: ', accessToken)

            if (!accessToken) {
                return {
                    type: LOGOUT,
                }
            }

            return refresh().then((action) => {
                if (action.type == OFFLINE) {
                    axios.defaults.headers.common['Authorization'] =
                        'Bearer ' + accessToken
                    return {
                        type: OFFLINE_LOGGED_IN,
                        payload: {
                            accessToken: accessToken,
                            isLoggedIn: true,
                        },
                    }
                }
                return action
            })
        })
        .catch((err) => {
            console.log(err.message)
            return {
                type: LOGOUT,
            }
        })
}

export const refresh = () => {
    console.log('action: REFRESH')
    return AuthService.refresh()
        .then(({ accessToken }) => {
            return {
                type: REFRESH_SUCCESS,
                payload: {
                    accessToken,
                },
            }
        })
        .catch((err) => {
            return failAction(err)
        })
}
