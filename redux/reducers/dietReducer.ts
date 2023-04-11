import { DietModel } from '../../models/DietModel'
import { ActionModel } from '../../models/ActionModel'
import {
    AUTO_MACRO_RATIOS,
    DEFAULT_MACROS,
    DEFAULT_MAX_MACROS,
    UPDATE_CURRENT_MACROS,
    ADD_CURRENT_MACROS,
    UPDATE_MAX_MACROS,
    SET_BODY_INFO,
    SET_MACRO_RATIOS,
} from '../types/types'

const initialState: DietModel = {
    day: new Date().toDateString(),
    macroRatios: { carbs: 0, fats: 0, proteins: 0 },
    currentCals: 0,
    currentCarbs: 0,
    currentProteins: 0,
    currentFats: 0,
    maxCals: 0,
    maxCarbs: 0,
    maxFats: 0,
    maxProteins: 0,
}

function dietReducer(
    state = initialState,
    action: ActionModel<DietModel>
): DietModel {
    const { type, payload } = action

    switch (type) {
        case SET_MACRO_RATIOS:
            return {
                ...state,
                macroRatios: {
                    ...payload.macroRatios,
                },
            }
        case AUTO_MACRO_RATIOS:
            return {
                ...state,
                macroRatios: {
                    carbs: 0.5,
                    proteins: 0.2,
                    fats: 0.3,
                },
            }
        case DEFAULT_MACROS:
            return {
                ...state,
                currentCals: 0,
                currentFats: 0,
                currentCarbs: 0,
                currentProteins: 0,
            }
        case DEFAULT_MAX_MACROS:
            return {
                ...state,
                maxCarbs: Math.ceil((0.4 * state.maxCals) / 4),
                maxFats: Math.ceil((0.3 * state.maxCals) / 9),
                maxProteins: Math.ceil((0.3 * state.maxCals) / 4),
            }
        case UPDATE_MAX_MACROS:
            return {
                ...state,
                maxCals: payload.maxCals,
                maxCarbs: Math.ceil(payload.maxCarbs),
                maxFats: Math.ceil(payload.maxFats),
                maxProteins: Math.ceil(payload.maxProteins),
            }
        case UPDATE_CURRENT_MACROS:
            return {
                ...state,
                currentCals: payload.currentCals,
                currentCarbs: payload.currentCarbs,
                currentFats: payload.currentFats,
                currentProteins: payload.currentProteins,
            }
        case ADD_CURRENT_MACROS:
            return {
                ...state,
                currentCals: state.currentCals + payload.currentCals,
                currentCarbs: state.currentCarbs + payload.currentCarbs,
                currentFats: state.currentFats + payload.currentFats,
                currentProteins:
                    state.currentProteins + payload.currentProteins,
            }
        default:
            return { ...state }
    }
}

export default dietReducer
