import AuthHeader from './AuthHeader'
import axios from '../api/axios'

const basePath = '/foods'

class FoodService {
    getAllFoods() {
        return AuthHeader.then((headers) => {
            return axios
                .get(basePath, { headers: headers })
                .then((res) => {
                    return res.data
                })
                .catch((err) => {
                    return { error: err }
                })
        })
    }
    getFoodsByQuery(search: string) {
        return AuthHeader.then((headers) => {
            return axios
                .get(basePath + '/find', {
                    params: { search: search },
                    headers: headers,
                })
                .then((res) => {
                    return res.data
                })
                .catch((err) => {
                    return { error: err }
                })
        })
    }
}

export default new FoodService()
