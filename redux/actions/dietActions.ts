import FoodModel from '../../models/FoodModel'
import DietServices from '../../services/DietServices'
import UserMacrosModel from '../../models/UserMacrosModel'
import { MacroRatioModel } from '../../models/MacroRatioModel'
import { BodyModel } from '../../models/BodyModel'
import { SETUP_IS_DONE } from '../types/types'
import dietServices from '../../services/DietServices'

export const addOneFoodToStorage = (newFood: FoodModel) => {
    console.log('action: ADD ONE TO STORAGE: ', newFood)
    return DietServices.addFoodToStorage(newFood, 1)
}

export const removeOneFoodFromStorage = (oldFood: FoodModel) => {
    console.log('action: REMOVE ONE TO STORAGE: ', oldFood)
    return DietServices.removeFoodFromStorage(oldFood, 1)
}

export const getStoredFoods = () => {
    console.log('action: GET STORED FOODS')
    return DietServices.getStoredFoods()
}

export const calculateMacros = () => {
    console.log('action: CALCULATE MACROS')
    return DietServices.calculateMacros()
}

export const getMaxMacros = () => {
    console.log('action: GET MAX MACROS')
    return DietServices.getMaxMacros()
}

export const setMaxMacros = (userMacros: UserMacrosModel) => {
    console.log('action: SET MAX MACROS')
    return DietServices.setMaxMacros(userMacros)
}

export const setMacroRatios = (ratios: MacroRatioModel) => {
    console.log('action: SET MACRO RATIOS')
    return DietServices.setMacroRatios(ratios)
}

export const setupIsDone = () => {
    return DietServices.setupIsDone()
}

export const isSetupDone = () => {
    return DietServices.isSetupDone()
}

export const removeAllFoods = () => {
    console.log('action: REMOVE ALL FOODS')
    return DietServices.removeAllFoods()
}
