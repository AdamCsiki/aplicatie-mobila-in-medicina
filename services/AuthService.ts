import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from '../api/axios'
import { LoginModel } from '../models/LoginModel'
import getHttpOnlyToken from '../misc/getHttpOnlyToken'

class AuthService {
    signIn({ email, password }: LoginModel) {
        return axios
            .post('/auth/signin', { email: email, password: password })
            .then((res) => {
                if (res.data.token) {
                    AsyncStorage.setItem('token', res.data.token)
                }
                if (res.headers['set-cookie']) {
                    const refresh: string | undefined = getHttpOnlyToken(
                        res.headers['set-cookie']
                    )

                    if (!refresh) {
                        return { error: 'Refresh token was not given.' }
                    }

                    AsyncStorage.setItem('refresh', refresh)
                }

                return { ...res.data }
            })
            .catch((err) => {
                return { error: err }
            })
    }

    signOut() {
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('refresh')
    }

    register({ email, password }: LoginModel) {
        return axios.post('/auth/register', { email, password })
    }
}

export default new AuthService()
