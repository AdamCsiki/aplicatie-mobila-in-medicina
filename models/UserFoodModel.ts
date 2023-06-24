import FoodModel from './FoodModel'
import { UnitOfMeasurement } from './MeasurmentModel'

interface UserFoodModel {
    quantity: number
    baseQuantity: number
    quantityType: UnitOfMeasurement
    food: FoodModel
}

export default UserFoodModel
