import axios from '../api/axios'
import FoodModel from '../models/FoodModel'
import foodModel from '../models/FoodModel'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    ADD_FOOD_TO_MEAL,
    BREAKFAST,
    DINNER,
    LUNCH,
    MEAL_TYPES,
    SET_MEALS,
    SNACK,
} from '../redux/types/types'
import { getCurrentDate } from '../misc/dateFormatting'
import MealModel from '../models/MealModel'
import UserFoodModel from '../models/UserFoodModel'
import { FoodDiaryModelPayload } from '../models/FoodDiaryModel'

const basePath = '/foods'
const uploadPath = '/upload'

// ! food pattern to save in storage
// ? food_<current_date>
class FoodService {
    getAllFoods() {
        return axios.get(basePath)
    }
    getFoodsByQuery(query: string) {
        return axios.get(basePath + '/find', {
            params: { search: query },
        })
    }
    putFoodImage(uri: String, id: number) {
        return axios.post(uploadPath + '/image/food', uri, {
            params: { id: id },
        })
    }
    putFood(foodItem: FoodModel) {
        console.log(foodItem)
        return axios.put(basePath + '/food', foodItem)
    }
    // !
    // ! STORED FOODS HERE
    // !
    getStoredMeals(date?: string) {
        console.log('MEAL DATE: ', date)
        if (!date) {
            date = getCurrentDate()
        }

        return AsyncStorage.getItem('meals_' + date).then((userFoods) => {
            if (!userFoods) {
                return {
                    [BREAKFAST]: [],
                    [LUNCH]: [],
                    [DINNER]: [],
                    [SNACK]: [],
                }
            }
            return JSON.parse(userFoods) as MealModel
        })
    }
    getStoredMealsToState(date?: string) {
        let currentDate = date

        if (!currentDate) {
            console.log('NO DATE')
            currentDate = getCurrentDate()
        }

        return AsyncStorage.getItem('meals_' + currentDate)
            .then((userFoods) => {
                if (!userFoods) {
                    return {
                        type: 'Default',
                    }
                }
                console.log('GET STORED FOODS: ', userFoods)
                return {
                    type: SET_MEALS,
                    payload: {
                        meals: JSON.parse(userFoods),
                    },
                }
            })
            .catch((err) => {
                console.log(err)
                return {
                    type: 'Default',
                }
            })
    }

    setStoredMeals(userMeals: MealModel) {
        return AsyncStorage.setItem(
            'meals_' + getCurrentDate(),
            JSON.stringify(userMeals)
        )
            .then(() => {
                console.log('Meals saved')
            })
            .catch((err) => {
                console.log(err)
            })
            .then(() => {
                return {
                    type: SET_MEALS,
                    payload: { meals: userMeals },
                }
            })
    }
    removeAllFoods() {
        return AsyncStorage.removeItem('userFoods')
    }

    addFood(
        mealType: MEAL_TYPES,
        newFood: foodModel,
        quantity: number,
        baseQuantity: number,
        quantityType: string
    ) {
        let userFood: UserFoodModel = {
            food: newFood,
            quantity: quantity,
            quantityType: quantityType, // ? quantity for show
            baseQuantity: baseQuantity, // ! quantity in grams for calculations
        } as UserFoodModel

        return {
            type: ADD_FOOD_TO_MEAL,
            payload: {
                newFood: userFood,
                selectedMeal: mealType,
            } as FoodDiaryModelPayload,
        }
    }

    removeFoodFromStorage(
        meal: MEAL_TYPES,
        oldFood: FoodModel,
        quantity: number
    ) {
        return this.getStoredMeals().then((userFoods) => {
            if (userFoods[meal].length === 0) {
                return
            }

            // ! GETTING THE INDEX OF THE FOOD
            // ? Needed to check if it's in the storage
            // ? And for removing it
            const oldFoodIndex = userFoods[meal].findIndex(
                (userFood) => userFood.food.id == oldFood.id
            )

            if (oldFoodIndex == -1) {
                return
            }

            if (userFoods[meal][oldFoodIndex].quantity <= quantity) {
                userFoods[meal].splice(oldFoodIndex, 1)
            } else {
                userFoods[meal][oldFoodIndex].quantity -= quantity
            }

            return this.setStoredMeals(userFoods)
        })
    }

    setMeals(meals: MealModel) {
        if (!meals) {
            return { type: 'default' }
        }

        return { type: SET_MEALS, payload: { meals: meals } }
    }
}

export default new FoodService()
