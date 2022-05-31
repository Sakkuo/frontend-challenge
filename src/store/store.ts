import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { imageAPI } from "../services/ImageService";




const rootReducer = combineReducers({
    [imageAPI.reducerPath]: imageAPI.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(imageAPI.middleware)
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']