import axios from '../api/axios'
import AuthHeader from './AuthHeader'

class UserService {
    getAllUsers() {
        return AuthHeader.then((headers) => {
            return axios.get('/users', { headers: headers })
        })
    }

    getUserById(id: number | string) {
        return AuthHeader.then((headers) => {
            return axios.get('/users/user', {
                params: { id: id },
                headers: headers,
            })
        })
    }
}
