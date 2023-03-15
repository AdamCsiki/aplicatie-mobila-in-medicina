import { combineReducers } from 'redux'
import authReducer from './authReducer'
import foodSearchReducer from './foodSearchReducer'
import dietReducer from './dietReducer'
import sportSearchReducer from './sportSearchReducer'

export default combineReducers({
    auth: authReducer,
    diet: dietReducer,
})
