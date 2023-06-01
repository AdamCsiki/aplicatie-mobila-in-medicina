import { BodyModel } from '../../models/BodyModel'
import DietServices from '../../services/DietServices'
import {
    EQUATION_TYPES,
    MAINTAIN_WEIGHT,
    SETUP_IS_DONE,
    WEIGHT_PLAN_TYPES,
} from '../types/types'
import { EXERCISE_ACTIVITY_TYPE } from '../../misc/MacroTypes'
import { BMR_TYPES, RMR_TYPES } from '../../misc/Equations'

export const setBodyInfo = (bodyInfo: BodyModel) => {
    console.log('action: SET BODY INFO')
    console.log(bodyInfo)
    return DietServices.setBodyInfo(bodyInfo)
}

export const getBodyInfo = () => {
    console.log('action: GET BODY INFO')
    return DietServices.getBodyInfo()
}

export const setCurrentBMR = (bmr_equation: BMR_TYPES, bmr: number) => {
    return DietServices.setCurrentBMR(bmr_equation, bmr)
}

export const setCurrentRMR = (rmr_equation: RMR_TYPES, rmr: number) => {
    return DietServices.setCurrentRMR(rmr_equation, rmr)
}

export const setCurrentWeightPlan = (
    weightPlanType: WEIGHT_PLAN_TYPES,
    weightPlanValue: number = 0
) => {
    if (weightPlanType == MAINTAIN_WEIGHT) {
        return DietServices.setCurrentWeightPlan(weightPlanType, 0)
    }
    return DietServices.setCurrentWeightPlan(weightPlanType, weightPlanValue)
}

export const setCurrentActivity = (activity: EXERCISE_ACTIVITY_TYPE) => {
    return DietServices.setCurrentActivity(activity)
}
