import { SearchMenuModel } from '../../models/SearchMenuModel'
import { ActionModel } from '../../models/ActionModel'
import {
    SPORT_SEARCH_FAIL,
    SPORT_SEARCH_SUCCESS,
    SPORT_SUCCESS,
} from '../types/types'

const initialState: SearchMenuModel = {
    query: '',
}

function sportSearchReducer(
    state = initialState,
    action: ActionModel<SearchMenuModel>
): SearchMenuModel {
    const { type, payload } = action

    switch (type) {
        case SPORT_SEARCH_SUCCESS:
            return {
                ...state,
                query: payload.query,
            }
        case SPORT_SEARCH_FAIL:
            return {
                ...state,
            }
        case SPORT_SUCCESS:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
}

export default sportSearchReducer
