import { configureStore } from "@reduxjs/toolkit";
import kordata from './modules/kordataAxios'
import billboarddata from './modules/billboardAxios'

export const store = configureStore({
    reducer: {
        kordata,
        billboarddata
    }
})