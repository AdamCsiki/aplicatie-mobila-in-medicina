import axios from '../api/axios'
import authHeader from './AuthHeader'

class UserService {
    getAllUsers() {
        authHeader.then((headers) => {
            return axios.get('/users', { headers: headers })
        })
    }

    getUserById(id: number | string) {
        authHeader.then((headers) => {
            return axios.get('/users/user', {
                params: { id: id },
                headers: headers,
            })
        })
    }
}
