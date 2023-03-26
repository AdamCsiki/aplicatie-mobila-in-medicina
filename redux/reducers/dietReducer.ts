import { DietModel } from '../../models/DietModel'
import { ActionModel } from '../../models/ActionModel'
import {
    DIET_DEFAULT,
    DIET_UPDATE,
    DIET_UPDATE_ADD,
    DIET_UPDATE_MAX,
} from '../types/types'

const initialState: DietModel = {
    currentCals: 0,
    currentCarbs: 0,
    currentProtein: 0,
    currentFats: 0,
    maxCals: 0,
    maxCarbs: 0,
    maxFats: 0,
    maxProtein: 0,
}

function dietReducer(
    state = initialState,
    action: ActionModel<DietModel>
): DietModel {
    const { type, payload } = action

    switch (type) {
        case DIET_DEFAULT:
            return {
                ...state,
                maxCarbs: (0.4 * state.maxCals) / 4,
                maxFats: (0.3 * state.maxCals) / 9,
                maxProtein: (0.3 * state.maxCals) / 4,
            }
        case DIET_UPDATE_MAX:
            return {
                ...state,
                maxCals: payload.maxCals,
                maxCarbs: payload.maxCarbs,
                maxFats: payload.maxFats,
                maxProtein: payload.maxProtein,
            }
        case DIET_UPDATE:
            return {
                ...state,
                currentCals: payload.currentCals,
                currentCarbs: payload.currentCarbs,
                currentFats: payload.currentFats,
                currentProtein: payload.currentProtein,
            }
        case DIET_UPDATE_ADD:
            return {
                ...state,
                currentCals: state.currentCals + payload.currentCals,
                currentCarbs: state.currentCarbs + payload.currentCarbs,
                currentFats: state.currentFats + payload.currentFats,
                currentProtein: state.currentProtein + payload.currentProtein,
            }
        default:
            return { ...state }
    }
}

export default dietReducer
