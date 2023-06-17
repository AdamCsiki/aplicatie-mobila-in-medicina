import MealModel from './MealModel'
import { MEAL_TYPES } from '../redux/types/types'
import UserFoodModel from './UserFoodModel'

interface FoodDiaryModel {
    selectedDay: string
    currentDay: string
    meals: MealModel
}

export interface FoodDiaryModelPayload extends FoodDiaryModel {
    newFood?: UserFoodModel
    selectedMeal?: MEAL_TYPES
}

export default FoodDiaryModel
