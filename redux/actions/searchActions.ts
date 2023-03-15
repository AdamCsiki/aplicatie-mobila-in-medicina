import FoodService from '../../services/FoodService'
import {
    FOOD_SEARCH_FAIL,
    FOOD_SEARCH_SUCCESS,
    FOOD_SUCCESS,
} from '../types/types'

export const searchFoods = (query: string) => {
    return FoodService.getFoodsByQuery(query)
        .then((res) => {
            return {
                type: FOOD_SEARCH_SUCCESS,
                payload: {
                    query: query,
                },
                error: '',
                data: res.data.foods,
            }
        })
        .catch((err) => {
            return {
                type: FOOD_SEARCH_FAIL,
                payload: {
                    query: query,
                },
                error: `${err.message}`,
            }
        })
}

export const getAllFoods = () => {
    return FoodService.getAllFoods()
        .then((res: any) => {
            return {
                type: FOOD_SUCCESS,
                error: '',
                data: res.data.foods,
            }
        })
        .catch((err) => {
            return {
                type: FOOD_SEARCH_FAIL,
                error: `${err.message}`,
            }
        })
}
