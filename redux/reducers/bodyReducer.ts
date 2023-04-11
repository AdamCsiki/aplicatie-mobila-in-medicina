import { BodyModel } from '../../models/BodyModel'
import { ActionModel } from '../../models/ActionModel'
import { DEFAULT_BODY_INFO, SET_BODY_INFO } from '../types/types'

const initialState: BodyModel = {
    sex: undefined,
    age: 0,
    weight: 0,
    height: 0,
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
            }
        default:
            return {
                ...state,
            }
    }
}

export default bodyReducer
