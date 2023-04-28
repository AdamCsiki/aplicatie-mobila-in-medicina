import { BodyModel } from '../../models/BodyModel'
import DietServices from '../../services/DietServices'
import { EQUATION_TYPES, SETUP_IS_DONE } from '../types/types'

export const setBodyInfo = (bodyInfo: BodyModel) => {
    console.log('action: SET BODY INFO')
    console.log(bodyInfo)
    return DietServices.setBodyInfo(bodyInfo)
}

export const getBodyInfo = () => {
    console.log('action: GET BODY INFO')
    return DietServices.getBodyInfo()
}

export const setCurrentBMR = (bmr: EQUATION_TYPES) => {
    return DietServices.setCurrentBMR(bmr)
}
