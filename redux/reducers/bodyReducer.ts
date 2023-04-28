import { BodyModel } from '../../models/BodyModel'
import { ActionModel } from '../../models/ActionModel'
import {
    DEFAULT_BODY_INFO,
    MIFFLIN_EQUATION,
    SET_BMR,
    SET_BODY_INFO,
    SET_CURRENT_BMR,
} from '../types/types'

const initialState: BodyModel = {
    sex: undefined,
    age: 0,
    weight: 0,
    height: 0,
    maxCalsByBody: 0,
    maxCarbsByBody: 0,
    maxFatsByBody: 0,
    maxProteinsByBody: 0,
    BMR_mifflin: 0,
    BMR_harris: 0,
    current_BMR: MIFFLIN_EQUATION,
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
                sex: payload.sex,
                age: payload.age,
                height: payload.height,
                weight: payload.weight,
                maxCalsByBody: payload.maxCalsByBody,
                BMR_mifflin: payload.BMR_mifflin,
                BMR_harris: payload.BMR_harris,
                current_BMR: payload.current_BMR,
            }
        case SET_CURRENT_BMR:
            return { ...state, current_BMR: payload.current_BMR }
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
