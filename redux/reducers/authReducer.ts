import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    OFFLINE_LOGGED_IN,
    OFFLINE_LOGGED_OUT,
    REFRESH_SUCCESS,
} from '../types/types'
import { AuthStateModel } from '../../models/AuthStateModel'

const initialState: AuthStateModel = {
    isLoggedIn: false,
    accessToken: null,
    user: null,
    error: null,
}

function authReducer(
    state = initialState,
    action: { type: string; payload: any }
) {
    const { type, payload } = action

    switch (type) {
        case OFFLINE_LOGGED_IN:
            return {
                ...state,
                accessToken: payload.accessToken,
                isLoggedIn: true,
            }
        case OFFLINE_LOGGED_OUT:
            return {
                ...state,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                accessToken: payload.accessToken,
                user: payload.user,
                error: null,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                accessToken: null,
                user: null,
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                accessToken: null,
                user: null,
                error: null,
            }
        case REFRESH_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                accessToken: payload.accessToken,
                error: null,
            }
        }
        default:
            return state
    }
}

export default authReducer
