import { SearchMenuModel } from '../../models/SearchMenuModel'
import { ActionModel } from '../../models/ActionModel'
import { FOOD_SEARCH_FAIL, FOOD_SEARCH_SUCCESS } from '../types/types'

const initialState: SearchMenuModel = {
    query: '',
}

function foodSearchReducer(
    state = initialState,
    action: ActionModel<SearchMenuModel>
) {
    const { type, payload } = action

    switch (type) {
        case FOOD_SEARCH_SUCCESS:
            return {
                ...state,
                query: payload.query,
            }
        case FOOD_SEARCH_FAIL:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default foodSearchReducer
