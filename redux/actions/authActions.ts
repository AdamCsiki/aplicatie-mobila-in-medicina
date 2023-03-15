import AuthService from '../../services/AuthService'
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REFRESH_SUCCESS,
} from '../types/types'
import { LoginModel } from '../../models/LoginModel'
import * as SecureStore from 'expo-secure-store'

function loginFailAction(error: any) {
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
            return SecureStore.getItemAsync('accessToken').then(
                (accessToken) => {
                    return SecureStore.getItemAsync('refreshToken').then(
                        (refreshToken) => {
                            return {
                                type: LOGIN_SUCCESS,
                                payload: {
                                    accessToken: accessToken,
                                },
                            }
                        }
                    )
                }
            )
        })
        .catch((err) => {
            return loginFailAction(err)
        })
}

export const signOut = () => {
    AuthService.signOut()

    return {
        type: LOGOUT,
    }
}

export const refresh = () => {
    return AuthService.refresh().then(({ accessToken, refreshToken }) => {
        return {
            type: REFRESH_SUCCESS,
            payload: {
                accessToken,
            },
        }
    })
}
