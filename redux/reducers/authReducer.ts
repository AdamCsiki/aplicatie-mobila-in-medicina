import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../types/types'
import { AuthStateModel } from '../../models/AuthStateModel'

const initialState: AuthStateModel = {
    isLoggedIn: false,
    refresh: null,
    token: null,
}

function authReducer(
    state = initialState,
    action: { type: string; payload: any }
) {
    const { type, payload } = action

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: payload.token,
                refresh: payload.refresh,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                refresh: null,
            }
        case LOGOUT: {
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                refresh: null,
            }
        }
        default:
            return state
    }
}

export default authReducer
