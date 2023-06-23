import { BodyModel } from '../../models/BodyModel'
import { ActionModel } from '../../models/ActionModel'
import {
    DEFAULT_BODY_INFO,
    MAINTAIN_WEIGHT,
    SET_BODY_INFO,
    SET_CURRENT_ACTIVITY,
    SET_CURRENT_BMR,
    SET_CURRENT_RMR,
    SET_CURRENT_WEIGHT_PLAN,
    SET_RECOMMENDED_CALORIES,
} from '../types/types'
import { SEDENTARY, SEX_TYPE_FEMALE } from '../../misc/MacroTypes'
import { MIFFLIN_BMR, MIFFLIN_RMR } from '../../misc/Equations'

const initialState: BodyModel = {
    sex: SEX_TYPE_FEMALE,
    age: 0,
    weight: 0,
    height: 0,
    recommendedCalories: 0,
    BMR_equation: MIFFLIN_BMR,
    BMR: 0,
    RMR_equation: MIFFLIN_RMR,
    RMR: 0,
    weightPlanType: MAINTAIN_WEIGHT,
    weightPlanValue: 0,
    activity: SEDENTARY,
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
                ...payload,
            }
        case SET_CURRENT_BMR:
            return {
                ...state,
                BMR_equation: payload.BMR_equation,
                BMR: payload.BMR,
            }
        case SET_CURRENT_RMR:
            return {
                ...state,
                RMR_equation: payload.RMR_equation,
                RMR: payload.RMR,
            }
        case SET_CURRENT_ACTIVITY:
            return { ...state, activity: payload.activity }
        case SET_CURRENT_WEIGHT_PLAN:
            return {
                ...state,
                weightPlanType: payload.weightPlanType,
                weightPlanValue: payload.weightPlanValue,
            }
        case SET_RECOMMENDED_CALORIES:
            return {
                ...state,
                recommendedCalories: payload.recommendedCalories,
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
