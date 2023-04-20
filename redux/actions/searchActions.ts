import FoodService from '../../services/FoodService'
import {
    FOOD_SEARCH_FAIL,
    FOOD_SEARCH_SUCCESS,
    FOOD_SUCCESS,
} from '../types/types'

export const searchFoods = (query: string) => {
    return FoodService.getFoodsByQuery(query)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return []
        })
}

export const getAllFoods = () => {
    return FoodService.getAllFoods()
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return []
        })
}
