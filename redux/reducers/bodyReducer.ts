import { BodyModel } from '../../models/BodyModel'
import { ActionModel } from '../../models/ActionModel'
import { DEFAULT_BODY_INFO, SET_BMR, SET_BODY_INFO } from '../types/types'
import {
    calculateBMR_harris,
    calculateBMR_mifflin,
} from '../../misc/MacroEquations'

const initialState: BodyModel = {
    bodyType: undefined,
    age: 0,
    weight: 0,
    height: 0,
    maxCalsByBody: 0,
    maxCarbsByBody: 0,
    maxFatsByBody: 0,
    maxProteinsByBody: 0,
    BMR_mifflin: 0,
    BMR_harris: 0,
}

function bodyReducer(
    state = initialState,
    action: ActionModel<BodyModel>
): BodyModel {
    const { type, payload } = action

    switch (type) {
        case SET_BODY_INFO:
            return {
                ...state,
                bodyType: payload.bodyType,
                age: payload.age,
                height: payload.height,
                weight: payload.weight,
                maxCalsByBody: payload.maxCalsByBody,
                BMR_mifflin: payload.BMR_mifflin,
                BMR_harris: payload.BMR_harris,
            }
        case SET_BMR:
            return {
                ...state,
                BMR_mifflin: calculateBMR_mifflin(
                    state.weight,
                    state.height,
                    state.age,
                    state.bodyType
                ),
                BMR_harris: calculateBMR_harris(
                    state.weight,
                    state.height,
                    state.age,
                    state.bodyType
                ),
            }
        case DEFAULT_BODY_INFO:
            return {
                ...initialState,
            }
        default:
            return {
                ...state,
            }
    }
}

export default bodyReducer
