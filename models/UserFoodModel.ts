import FoodModel from './FoodModel'

interface UserFoodModel {
    quantity: number
    baseQuantity: number
    quantityType: string
    food: FoodModel
}

export default UserFoodModel
