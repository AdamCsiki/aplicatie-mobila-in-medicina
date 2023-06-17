import { combineReducers } from 'redux'
import authReducer from './authReducer'
import dietReducer from './dietReducer'
import bodyReducer from './bodyReducer'
import foodDiaryReducer from './foodDiaryReducer'

export default combineReducers({
    auth: authReducer,
    diet: dietReducer,
    body: bodyReducer,
    foodDiary: foodDiaryReducer,
})
