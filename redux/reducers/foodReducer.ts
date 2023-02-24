import { SearchMenuModel } from '../../models/SearchMenuModel'
import { FoodModel } from '../../models/FoodModel'
import { ActionModel } from '../../models/ActionModel'
import { FOOD_SEARCH_FAIL, FOOD_SEARCH_SUCCESS } from '../types/types'

const initialState: SearchMenuModel<FoodModel> = {
    query: '',
    list: [],
    error: '',
}

function foodReducer(state = initialState, action: ActionModel) {
    const { type, payload } = action

    switch (type) {
        case FOOD_SEARCH_SUCCESS:
            return {
                ...state,
                query: payload.query,
                list: payload.list,
                error: '',
            }
        case FOOD_SEARCH_FAIL:
            return {
                ...state,
                error: payload.error,
            }
        default:
            return state
    }
}

export default foodReducer
