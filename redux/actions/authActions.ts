import AuthService from '../../services/AuthService'
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../types/types'
import { LoginModel } from '../../models/LoginModel'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const signIn = ({ email, password }: LoginModel) => {
    return AuthService.signIn({ email, password })
        .then((res: any) => {
            if (res.error) {
                return {
                    type: LOGIN_FAIL,
                    payload: {
                        token: null,
                        refresh: null,
                        error: JSON.stringify(res.error.message),
                    },
                }
            }

            return AsyncStorage.multiGet(['token', 'refresh']).then(
                (tokens) => {
                    return {
                        type: LOGIN_SUCCESS,
                        payload: { token: tokens[0][1], refresh: tokens[1][1] },
                    }
                }
            )
        })
        .catch((err) => {
            const msg = err.toString()

            return { type: LOGIN_FAIL, error: msg }
        })
}

export const signOut = () => {
    AuthService.signOut()

    return {
        type: LOGOUT,
    }
}
