import FoodModel from '../../models/FoodModel'
import FoodService from '../../services/FoodService'
import { MEAL_TYPES } from '../types/types'
import MealModel from '../../models/MealModel'

export const addFood = (
    meal: MEAL_TYPES,
    newFood: FoodModel,
    quantity: number,
    baseQuantity: number,
    quantityType: string
) => {
    console.log('action: ADD FOOD TO STORAGE')
    return FoodService.addFood(
        meal,
        newFood,
        quantity,
        baseQuantity,
        quantityType
    )
}

const putFood = (foodItem: FoodModel) => {
    // TODO !!!!!!
}

export const removeOneFoodFromStorage = (
    meal: MEAL_TYPES,
    oldFood: FoodModel
) => {
    console.log('action: REMOVE ONE TO STORAGE: ', oldFood)
    return FoodService.removeFoodFromStorage(meal, oldFood, 1)
}

export const getStoredMealsToState = (date?: string) => {
    console.log('action: GET STORED FOODS TO STATE')
    return FoodService.getStoredMealsToState(date)
}

export const removeAllFoods = () => {
    console.log('action: REMOVE ALL FOODS')
    return FoodService.removeAllFoods()
}

export const setStoredMeals = (meals: MealModel) => {
    console.log('action: SET MEALS')
    return FoodService.setStoredMeals(meals)
}
