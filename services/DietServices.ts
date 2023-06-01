import AsyncStorage from '@react-native-async-storage/async-storage'
import foodModel from '../models/FoodModel'
import UserFoodModel from '../models/UserFoodModel'
import {
    DEFAULT_BODY_INFO,
    DEFAULT_MACROS,
    DEFAULT_MAX_MACROS,
    EQUATION_TYPES,
    SET_BODY_INFO,
    SET_CURRENT_ACTIVITY,
    SET_CURRENT_BMR,
    SET_MACRO_RATIOS,
    SET_CURRENT_WEIGHT_PLAN,
    SETUP_IS_DONE,
    SETUP_IS_NOT_DONE,
    UPDATE_CURRENT_MACROS,
    UPDATE_MAX_MACROS,
    WEIGHT_PLAN_TYPES,
    SET_CURRENT_RMR,
} from '../redux/types/types'
import UserMacrosModel from '../models/UserMacrosModel'
import FoodModel from '../models/FoodModel'
import { MacroRatioModel } from '../models/MacroRatioModel'
import { BodyModel } from '../models/BodyModel'
import { EXERCISE_ACTIVITY_TYPE } from '../misc/MacroTypes'
import { BMR_TYPES, RMR_TYPES } from '../misc/Equations'

class DietServices {
    getStoredFoods() {
        return AsyncStorage.getItem('userFoods').then((userFoods) => {
            if (!userFoods) {
                return [] as UserFoodModel[]
            }
            console.log('GET STORED FOODS: ', userFoods)
            return JSON.parse(userFoods) as UserFoodModel[]
        })
    }
    addFoodToStorage(newFood: foodModel, quantity: number) {
        return this.getStoredFoods().then((userFoods) => {
            // ! IF THERE IS NOTHING IN THE STORAGE
            if (userFoods.length === 0) {
                userFoods.push({ id: 0, quantity: quantity, food: newFood })

                return AsyncStorage.setItem(
                    'userFoods',
                    JSON.stringify(userFoods)
                )
            }

            // ! IF FOOD EXISTS IN STORAGE
            // ? Find the specific food, then adding the needed quantity
            for (let i = 0; i < userFoods.length; i++) {
                if (userFoods[i].food.id === newFood.id) {
                    userFoods[i].quantity += quantity

                    return AsyncStorage.setItem(
                        'userFoods',
                        JSON.stringify(userFoods)
                    )
                }
            }

            // ! IF FOOD DOES NOT EXIST IN STORAGE
            // ? Getting the last id of the list
            // ? Adding a new userFood to the array
            userFoods.push({
                id: userFoods[userFoods.length - 1].quantity + 1,
                quantity: 1,
                food: newFood,
            })

            return AsyncStorage.setItem('userFoods', JSON.stringify(userFoods))
        })
    }

    removeFoodFromStorage(oldFood: FoodModel, quantity: number) {
        return this.getStoredFoods().then((userFoods) => {
            if (userFoods.length === 0) {
                return
            }

            // ! GETTING THE INDEX OF THE FOOD
            // ? Needed to check if it's in the storage
            // ? And for removing it
            const oldFoodIndex = userFoods.findIndex(
                (userFood) => userFood.food.id == oldFood.id
            )

            if (oldFoodIndex == -1) {
                return
            }

            if (userFoods[oldFoodIndex].quantity <= quantity) {
                userFoods.splice(oldFoodIndex, 1)
            } else {
                userFoods[oldFoodIndex].quantity -= quantity
            }

            return AsyncStorage.setItem('userFoods', JSON.stringify(userFoods))
        })
    }

    calculateMacros() {
        return this.getStoredFoods().then((userFoods) => {
            if (userFoods.length === 0) {
                return {
                    type: DEFAULT_MACROS,
                }
            }

            if (userFoods.length === 0) {
                return {
                    type: DEFAULT_MACROS,
                }
            }

            const macros = { calories: 0, carbs: 0, fats: 0, proteins: 0 }

            userFoods.forEach((userFood) => {
                macros.calories += userFood.food.calories * userFood.quantity
                macros.carbs += userFood.food.carbs * userFood.quantity
                macros.fats += userFood.food.fats * userFood.quantity
                macros.proteins += userFood.food.proteins * userFood.quantity
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
        })
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

    removeAllFoods() {
        return AsyncStorage.removeItem('userFoods').then(() => {
            return { type: DEFAULT_MACROS }
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

    setBodyInfo(bodyInfo: BodyModel) {
        return AsyncStorage.setItem('userBodyInfo', JSON.stringify(bodyInfo))
            .then(() => {
                return {
                    type: SET_BODY_INFO,
                    payload: {
                        ...bodyInfo,
                    },
                }
            })
            .catch((err) => {
                console.log('ERROR: ', err)
                return {
                    type: DEFAULT_BODY_INFO,
                }
            })
    }

    getBodyInfo() {
        return AsyncStorage.getItem('userBodyInfo').then((userBodyInfo) => {
            if (!userBodyInfo) {
                return {
                    type: DEFAULT_BODY_INFO,
                }
            }

            const bodyInfo: BodyModel = JSON.parse(userBodyInfo)

            return {
                type: SET_BODY_INFO,
                payload: {
                    ...bodyInfo,
                },
            }
        })
    }

    setCurrentBMR(bmr_equation: BMR_TYPES, bmr: number) {
        return AsyncStorage.getItem('userBodyInfo').then((userBodyInfo) => {
            if (!userBodyInfo) {
                return {
                    type: DEFAULT_BODY_INFO,
                }
            }

            bmr = Number.parseFloat(bmr.toFixed(2))

            const bodyInfo: BodyModel = JSON.parse(userBodyInfo)
            bodyInfo.BMR_equation = bmr_equation
            bodyInfo.BMR = bmr

            return AsyncStorage.setItem(
                'userBodyInfo',
                JSON.stringify(bodyInfo)
            ).then(() => {
                return {
                    type: SET_CURRENT_BMR,
                    payload: {
                        BMR_equation: bmr_equation,
                        BMR: bmr,
                    },
                }
            })
        })
    }

    setCurrentRMR(rmr_equation: RMR_TYPES, rmr: number) {
        return AsyncStorage.getItem('userBodyInfo').then((userBodyInfo) => {
            if (!userBodyInfo) {
                return {
                    type: DEFAULT_BODY_INFO,
                }
            }

            rmr = Number.parseFloat(rmr.toFixed(2))

            const bodyInfo: BodyModel = JSON.parse(userBodyInfo)
            bodyInfo.RMR_equation = rmr_equation
            bodyInfo.RMR = rmr

            return AsyncStorage.setItem(
                'userBodyInfo',
                JSON.stringify(bodyInfo)
            ).then(() => {
                return {
                    type: SET_CURRENT_RMR,
                    payload: {
                        RMR_equation: rmr_equation,
                        RMR: rmr,
                    },
                }
            })
        })
    }

    setCurrentActivity(activity: EXERCISE_ACTIVITY_TYPE) {
        return AsyncStorage.getItem('userBodyInfo').then((userBodyInfo) => {
            if (!userBodyInfo) {
                return {
                    type: DEFAULT_BODY_INFO,
                }
            }

            const bodyInfo: BodyModel = JSON.parse(userBodyInfo)
            bodyInfo.activity = activity

            return AsyncStorage.setItem(
                'userBodyInfo',
                JSON.stringify(bodyInfo)
            ).then(() => {
                return {
                    type: SET_CURRENT_ACTIVITY,
                    payload: {
                        activity: activity,
                    },
                }
            })
        })
    }

    setCurrentWeightPlan(
        weightPlanType: WEIGHT_PLAN_TYPES,
        weightPlanValue: number
    ) {
        return AsyncStorage.getItem('userBodyInfo').then((userBodyInfo) => {
            if (!userBodyInfo) {
                return {
                    type: DEFAULT_BODY_INFO,
                }
            }

            const bodyInfo: BodyModel = JSON.parse(userBodyInfo)
            bodyInfo.weightPlanType = weightPlanType
            bodyInfo.weightPlanValue = weightPlanValue

            return AsyncStorage.setItem(
                'userBodyInfo',
                JSON.stringify(bodyInfo)
            ).then(() => {
                return {
                    type: SET_CURRENT_WEIGHT_PLAN,
                    payload: {
                        weightPlanType: weightPlanType,
                        weightPlanValue: weightPlanValue,
                    },
                }
            })
        })
    }

    isSetupDone() {
        return AsyncStorage.getItem('setupIsDone')
            .then((setupIsDone) => {
                if (!setupIsDone) {
                    return {
                        type: SETUP_IS_NOT_DONE,
                    }
                }

                return {
                    type: SETUP_IS_DONE,
                }
            })
            .catch((err) => {
                return {
                    type: SETUP_IS_NOT_DONE,
                }
            })
    }

    setupIsDone() {
        return AsyncStorage.setItem('setupIsDone', JSON.stringify(true)).then(
            () => {
                return {
                    type: SETUP_IS_DONE,
                }
            }
        )
    }
}

export default new DietServices()
