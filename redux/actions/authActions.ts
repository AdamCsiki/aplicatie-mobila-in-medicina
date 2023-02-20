import AuthService from '../../services/AuthService'
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../types/types'
import { LoginModel } from '../../models/LoginModel'
import { AppDispatch } from '../store'

export const signIn =
    ({ email, password }: LoginModel) =>
    (dispatch: AppDispatch) => {
        return AuthService.signIn({ email, password })
            .then((data) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { token: data.token, refresh: data.refresh },
                })

                return Promise.resolve()
            })
            .catch((err) => {
                const msg = err.toString()

                dispatch({ type: LOGIN_FAIL, payload: msg })

                return Promise.reject()
            })
    }

export const signOut = () => (dispatch: any) => {
    AuthService.signOut()

    dispatch({
        type: LOGOUT,
    })
}
