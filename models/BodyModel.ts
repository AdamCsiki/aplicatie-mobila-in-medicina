import { WEIGHT_PLAN_TYPES } from '../redux/types/types'
import { EXERCISE_ACTIVITY_TYPE, SEX_TYPES } from '../misc/MacroTypes'
import { BMR_TYPES, RMR_TYPES } from '../misc/Equations'

export type BodyModel = {
    height: number
    weight: number
    sex: SEX_TYPES
    age: number
    recommendedCalories: number
    BMR_equation: BMR_TYPES
    BMR: number
    RMR_equation: RMR_TYPES
    RMR: number
    weightPlanType: WEIGHT_PLAN_TYPES
    weightPlanValue: number
    activity: EXERCISE_ACTIVITY_TYPE
}
