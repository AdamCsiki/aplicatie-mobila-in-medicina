import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'

const middleware = [thunk]

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store
