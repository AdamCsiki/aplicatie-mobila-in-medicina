import * as SecureStore from 'expo-secure-store'
import axios, { jar } from '../api/axios'
import { LoginModel } from '../models/LoginModel'
import { Cookie } from 'tough-cookie'
import getHttpOnlyToken from '../misc/getHttpOnlyToken'
import { AxiosResponse } from 'axios'

function setTokens(res: AxiosResponse) {
    if (!res.data.token) {
        return { error: 'No access token.' }
    }

    if (!res.headers['set-cookie']) {
        return { error: 'Set-cookie missing.' }
    }

    const accessToken = res.data.token

    // ! Adding the authorization token
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken

    const cookies = res.headers['set-cookie'].map((cookie) =>
        Cookie.parse(cookie)
    )

    if (!cookies[0]) {
        return { error: 'Cookies missing.' }
    }

    if (!cookies[0].extensions) {
        return { error: 'Refresh token missing.' }
    }

    const refreshToken = getHttpOnlyToken(cookies[0].extensions)

    SecureStore.setItemAsync('accessToken', accessToken)
    SecureStore.setItemAsync('refreshToken', refreshToken)

    return { accessToken, refreshToken }
}

class AuthService {
    signIn({ email, password }: LoginModel) {
        return axios
            .post('/auth/signin', { email: email, password: password })
            .then((res) => {
                return setTokens(res)
            })
    }

    signOut() {
        SecureStore.deleteItemAsync('token')
        SecureStore.deleteItemAsync('refresh')
    }

    register({ email, password }: LoginModel) {
        return axios.post('/auth/register', { email, password })
    }

    refresh() {
        return axios.get('/auth/refresh').then((res) => {
            return setTokens(res)
        })
    }
}

export default new AuthService()
