import AsyncStorage from '@react-native-async-storage/async-storage'
import foodModel from '../models/FoodModel'
import foodsArrayModel from '../models/foodsArrayModel'
import { DIET_DEFAULT, DIET_UPDATE } from '../redux/types/types'

class DietServices {
    getStoredFoods() {
        return AsyncStorage.getItem('userFoods').then((userFoods) => {
            if (!userFoods) {
                return []
            }
            return JSON.parse(userFoods)
        })
    }
    addFoodToStorage(newFood: foodModel) {
        return AsyncStorage.getItem('userFoods').then((userFoods) => {
            // ! IF THERE IS NOTHING IN THE STORAGE
            if (!userFoods) {
                const newFoodsArray: foodsArrayModel[] = [
                    { id: 0, count: 1, food: newFood },
                ]

                return AsyncStorage.setItem(
                    'userFoods',
                    JSON.stringify(newFoodsArray)
                )
            }

            const userFoodsArray: foodsArrayModel[] = JSON.parse(userFoods)

            // ! IF FOOD EXISTS IN STORAGE
            for (let i = 0; i < userFoodsArray.length; i++) {
                if (
                    JSON.stringify(userFoodsArray[i].food) ===
                    JSON.stringify(newFood)
                ) {
                    userFoodsArray[i].count += 1
                    return AsyncStorage.setItem(
                        'userFoods',
                        JSON.stringify(userFoodsArray)
                    )
                }
            }

            // ! IF FOOD DOES NOT EXIST IN STORAGE
            const newFoodObject: foodsArrayModel = {
                id: userFoodsArray[userFoodsArray.length - 1].count + 1,
                count: 1,
                food: newFood,
            }
            userFoodsArray.push(newFoodObject)

            return AsyncStorage.setItem(
                'userFoods',
                JSON.stringify(userFoodsArray)
            )
        })
    }

    calculateMacros() {
        return AsyncStorage.getItem('userFoods').then((userFoods) => {
            if (!userFoods) {
                return {
                    type: DIET_DEFAULT,
                }
            }
            const userFoodsArray: foodsArrayModel[] = JSON.parse(userFoods)

            const macros = { calories: 0, carbs: 0, fats: 0, proteins: 0 }

            userFoodsArray.forEach((userFood) => {
                macros.calories += userFood.food.calories
                macros.carbs += userFood.food.carbs
                macros.fats += userFood.food.fats
                macros.proteins += userFood.food.proteins
            })

            return {
                type: DIET_UPDATE,
                payload: {
                    currentCals: macros.calories,
                    currentCarbs: macros.carbs,
                    currentFats: macros.fats,
                    currentProtein: macros.proteins,
                },
            }
        })
    }
}

export default new DietServices()
