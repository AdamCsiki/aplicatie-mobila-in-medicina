import { EQUATION_TYPES, WEIGHT_PLAN_TYPES } from '../redux/types/types'
import {
    SEX_TYPE_FEMALE,
    SEX_TYPE_MALE,
    EXERCISE_ACTIVITY_TYPE,
    SEX_TYPES,
} from '../misc/MacroTypes'
import { BMR_TYPES, MIFFLIN_RMR, RMR_TYPES } from '../misc/Equations'

export type BodyModel = {
    height: number
    weight: number
    sex: SEX_TYPES
    age: number
    maxCalsByBody: number
    maxCarbsByBody: number
    maxFatsByBody: number
    maxProteinsByBody: number
    BMR_equation: BMR_TYPES
    BMR: number
    RMR_equation: RMR_TYPES
    RMR: number
    weightPlanType: WEIGHT_PLAN_TYPES
    weightPlanValue: number
    activity: EXERCISE_ACTIVITY_TYPE
}
