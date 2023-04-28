import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk]

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
})

function select(state: RootState) {
    return state.auth
}

// ! Making sure the states are changed by logging the result, can be removed after finalization
let currentValue: any
store.subscribe(() => {
    let previousValue = currentValue
    currentValue = select(store.getState())

    if (previousValue !== currentValue) {
        console.log(
            'Some deep nested property in auth changed from\n',
            previousValue,
            '\nto\n',
            currentValue
        )
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store
