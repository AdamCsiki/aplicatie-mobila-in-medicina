import axios from '../api/axios'
import FoodModel from '../models/FoodModel'

const basePath = '/foods'
const uploadPath = '/upload'

class FoodService {
    getAllFoods() {
        return axios.get(basePath)
    }
    getFoodsByQuery(query: string) {
        return axios.get(basePath + '/find', {
            params: { search: query },
        })
    }
    putFoodImage(uri: String, id: number) {
        return axios.post(uploadPath + '/image/food', uri, {
            params: { id: id },
        })
    }
}

export default new FoodService()
