import UserFoodModel from './UserFoodModel'
import {
    BREAKFAST,
    DINNER,
    LUNCH,
    MEAL_TYPES,
    SNACK,
} from '../redux/types/types'

export const MealArray: MEAL_TYPES[] = [BREAKFAST, DINNER, LUNCH, SNACK]

interface MealModel {
    [BREAKFAST]: UserFoodModel[]
    [LUNCH]: UserFoodModel[]
    [DINNER]: UserFoodModel[]
    [SNACK]: UserFoodModel[]
}

export default MealModel
