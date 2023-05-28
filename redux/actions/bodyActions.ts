import { BodyModel } from '../../models/BodyModel'
import DietServices from '../../services/DietServices'
import { EQUATION_TYPES, SETUP_IS_DONE } from '../types/types'
import { EXERCISE_ACTIVITY_TYPE } from '../../misc/MacroTypes'

export const setBodyInfo = (bodyInfo: BodyModel) => {
    console.log('action: SET BODY INFO')
    console.log(bodyInfo)
    return DietServices.setBodyInfo(bodyInfo)
}

export const getBodyInfo = () => {
    console.log('action: GET BODY INFO')
    return DietServices.getBodyInfo()
}

export const setCurrentBMR = (bmr_equation: EQUATION_TYPES, bmr: number) => {
    return DietServices.setCurrentBMR(bmr_equation, bmr)
}

export const setCurrentActivity = (activity: EXERCISE_ACTIVITY_TYPE) => {
    return DietServices.setCurrentActivity(activity)
}
