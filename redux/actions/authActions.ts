import AuthService from '../../services/AuthService'
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    OFFLINE,
    REFRESH_SUCCESS,
} from '../types/types'
import { LoginModel } from '../../models/LoginModel'
import * as SecureStore from 'expo-secure-store'
import { SignUpModel } from '../../models/SignUpModel'

function failAction(error: any) {
    if (error.message === 'timeout of 3000ms exceeded') {
        console.log('SERVER OFFLINE!')
        return { type: OFFLINE }
    }

    return {
        type: LOGIN_FAIL,
        payload: {
            accessToken: null,
            error: JSON.stringify(error),
        },
    }
}

export const signIn = ({ email, password }: LoginModel) => {
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
    return AuthService.signOut()
        .then(() => {
            return {
                type: LOGOUT,
            }
        })
        .catch((err) => {
            failAction(err)
        })
}

export const signUp = ({ username, email, password }: SignUpModel) => {
    return AuthService.signUp({ username, email, password })
        .catch((err) => {
            console.log(err.message)
        })
        .catch((err) => {
            return failAction(err)
        })
}

export const refresh = () => {
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
