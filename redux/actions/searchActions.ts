import FoodService from '../../services/FoodService'
import { FOOD_SEARCH_FAIL, FOOD_SEARCH_SUCCESS } from '../types/types'

export const searchFoods = (query: string) => {
    return FoodService.getFoodsByQuery(query).then((data: any) => {
        if (!query) {
            return {
                type: FOOD_SEARCH_FAIL,
                payload: {
                    error: 'Search query missing.',
                },
            }
        }
        if (data.error) {
            return {
                type: FOOD_SEARCH_FAIL,
                payload: {
                    query: query,
                    error: JSON.stringify(data.error),
                },
            }
        }
        return {
            type: FOOD_SEARCH_SUCCESS,
            payload: {
                list: data.foods,
                query: query,
                error: '',
            },
        }
    })
}

export const getAllFoods = () => {
    return FoodService.getAllFoods().then((res) => {
        return res.data
    })
}
