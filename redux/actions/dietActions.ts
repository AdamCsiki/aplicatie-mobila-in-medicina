import foodModel from '../../models/FoodModel'
import DietServices from '../../services/DietServices'
import { DIET_UPDATE_ADD } from '../types/types'

export const addFoodToStorage = (newFood: foodModel) => {
    return DietServices.addFoodToStorage(newFood).then(() => {
        return {
            type: DIET_UPDATE_ADD,
            payload: {
                currentCals: newFood.calories,
                currentCarbs: newFood.carbs,
                currentFats: newFood.fats,
                currentProtein: newFood.proteins,
            },
        }
    })
}

export const getStoredFoods = () => {
    return DietServices.getStoredFoods()
}

export const calculateMacros = () => {
    return DietServices.calculateMacros()
}
