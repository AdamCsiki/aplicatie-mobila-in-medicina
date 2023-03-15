import axios from '../api/axios'

const basePath = '/foods'

class FoodService {
    getAllFoods() {
        return axios.get(basePath)
    }
    getFoodsByQuery(query: string) {
        return axios.get(basePath + '/find', {
            params: { search: query },
        })
    }
}

export default new FoodService()
