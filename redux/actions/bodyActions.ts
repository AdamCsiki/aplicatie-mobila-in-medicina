import { BodyModel } from '../../models/BodyModel'
import DietServices from '../../services/DietServices'

export const setBodyInfo = (bodyInfo: BodyModel) => {
    console.log('action: SET BODY INFO')
    console.log(bodyInfo)
    return DietServices.setBodyInfo(bodyInfo)
}

export const getBodyInfo = () => {
    console.log('action: GET BODY INFO')
    return DietServices.getBodyInfo()
}

export const setBMR = () => {}
