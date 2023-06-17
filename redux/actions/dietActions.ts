import DietServices from '../../services/DietService'
import UserMacrosModel from '../../models/UserMacrosModel'
import { MacroRatioModel } from '../../models/MacroRatioModel'
import MealModel from '../../models/MealModel'

export const calculateMacros = (meals: MealModel) => {
    console.log('action: CALCULATE MACROS')
    return DietServices.calculateMacros(meals)
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
