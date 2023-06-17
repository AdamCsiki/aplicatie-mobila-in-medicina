import FoodService from '../../services/FoodService'

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
