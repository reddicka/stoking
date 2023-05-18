import { combineReducers, configureStore } from "@reduxjs/toolkit"

import appSlice from "./reducers/appSlice"
import coopSlice from "./reducers/coopSlice"


const rootReducer = combineReducers({
    app: appSlice,
    coop: coopSlice
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export const store = setupStore()


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']