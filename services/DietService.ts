import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    DEFAULT_MACROS,
    DEFAULT_MAX_MACROS,
    SET_MACRO_RATIOS,
    UPDATE_CURRENT_MACROS,
    UPDATE_MAX_MACROS,
} from '../redux/types/types'
import UserMacrosModel from '../models/UserMacrosModel'
import { MacroRatioModel } from '../models/MacroRatioModel'
import MealModel, { MealArray } from '../models/MealModel'

class DietService {
    calculateMacros(meals: MealModel) {
        if (meals === null) {
            return {
                type: DEFAULT_MACROS,
            }
        }

        const macros = { calories: 0, carbs: 0, fats: 0, proteins: 0 }

        MealArray.forEach((meal) => {
            meals[meal].forEach((userFood) => {
                macros.calories +=
                    (userFood.food.calories * userFood.baseQuantity) / 100
                macros.carbs +=
                    (userFood.food.carbs * userFood.baseQuantity) / 100
                macros.fats +=
                    (userFood.food.fats * userFood.baseQuantity) / 100
                macros.proteins +=
                    (userFood.food.proteins * userFood.baseQuantity) / 100
            })
        })

        console.log({
            currentCals: macros.calories.toFixed(2),
            currentCarbs: macros.carbs.toFixed(2),
            currentFats: macros.fats.toFixed(2),
            currentProteins: macros.proteins.toFixed(2),
        })

        return {
            type: UPDATE_CURRENT_MACROS,
            payload: {
                currentCals: macros.calories.toFixed(2),
                currentCarbs: macros.carbs.toFixed(2),
                currentFats: macros.fats.toFixed(2),
                currentProteins: macros.proteins.toFixed(2),
            },
        }
    }

    setMaxMacros(userMaxMacros: UserMacrosModel) {
        userMaxMacros.maxFats = Math.ceil(userMaxMacros.maxFats)
        userMaxMacros.maxCarbs = Math.ceil(userMaxMacros.maxCarbs)
        userMaxMacros.maxProteins = Math.ceil(userMaxMacros.maxProteins)

        return AsyncStorage.setItem(
            'userMacros',
            JSON.stringify(userMaxMacros)
        ).then(() => {
            return {
                type: UPDATE_MAX_MACROS,
                payload: {
                    maxCals: userMaxMacros.maxCals,
                    maxCarbs: userMaxMacros.maxCarbs,
                    maxFats: userMaxMacros.maxFats,
                    maxProteins: userMaxMacros.maxProteins,
                },
            }
        })
    }

    getMaxMacros() {
        return AsyncStorage.getItem('userMacros').then((userMacros) => {
            if (!userMacros) {
                return {
                    type: DEFAULT_MAX_MACROS,
                }
            }

            const parsedUserMacros: UserMacrosModel = JSON.parse(userMacros)

            return {
                type: UPDATE_MAX_MACROS,
                payload: {
                    maxCals: parsedUserMacros.maxCals,
                    maxCarbs: parsedUserMacros.maxCarbs,
                    maxFats: parsedUserMacros.maxFats,
                    maxProteins: parsedUserMacros.maxProteins,
                },
            }
        })
    }

    setMacroRatios(ratios: MacroRatioModel) {
        return AsyncStorage.setItem('userRatios', JSON.stringify(ratios)).then(
            () => {
                return {
                    type: SET_MACRO_RATIOS,
                    payload: {
                        macroRatios: ratios,
                    },
                }
            }
        )
    }
}

export default new DietService()
