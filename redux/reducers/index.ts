import { combineReducers } from 'redux'
import authReducer from './authReducer'
import foodReducer from './foodReducer'

export default combineReducers({
    auth: authReducer,
    food: foodReducer,
})
