import { EQUATION_TYPES } from '../redux/types/types'
import {
    BODY_TYPE_FEMALE,
    BODY_TYPE_MALE,
    EXERCISE_ACTIVITY_TYPE,
} from '../misc/MacroTypes'

export type BodyModel = {
    height: number
    weight: number
    sex: BODY_TYPE_MALE | BODY_TYPE_FEMALE | undefined
    age: number
    maxCalsByBody: number
    maxCarbsByBody: number
    maxFatsByBody: number
    maxProteinsByBody: number
    BMR_mifflin: number
    BMR_harris: number
    BMR_equation: EQUATION_TYPES
    BMR: number
    activity: EXERCISE_ACTIVITY_TYPE
}
