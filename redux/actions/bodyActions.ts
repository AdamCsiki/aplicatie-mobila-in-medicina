import { BodyModel } from '../../models/BodyModel'
import { WEIGHT_PLAN_TYPES } from '../types/types'
import { EXERCISE_ACTIVITY_TYPE } from '../../misc/MacroTypes'
import { BMR_TYPES, RMR_TYPES } from '../../misc/Equations'
import BodyService from '../../services/BodyService'

export const setBodyInfo = (bodyInfo: BodyModel) => {
    console.log('action: SET BODY INFO')
    console.log(bodyInfo)
    return BodyService.setBodyInfo(bodyInfo)
}

export const getBodyInfo = () => {
    console.log('action: GET BODY INFO')
    return BodyService.getBodyInfo()
}

export const setCurrentBMR = (bmr_equation: BMR_TYPES, bmr: number) => {
    return BodyService.setCurrentBMR(bmr_equation, bmr)
}

export const setCurrentRMR = (rmr_equation: RMR_TYPES, rmr: number) => {
    return BodyService.setCurrentRMR(rmr_equation, rmr)
}

export const setCurrentWeightPlan = (
    weightPlanType: WEIGHT_PLAN_TYPES,
    weightPlanValue: number = 0
) => {
    return BodyService.setCurrentWeightPlan(weightPlanType, weightPlanValue)
}

export const setRecommendedMacros = () => {
    return BodyService.setRecommendedMacros()
}

export const setCurrentActivity = (activity: EXERCISE_ACTIVITY_TYPE) => {
    return BodyService.setCurrentActivity(activity)
}
