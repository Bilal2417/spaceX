import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rocketSlice from "./rocketSlice";

const mainReducer = combineReducers({
    rocketSlice: rocketSlice
});

export const mainStore = configureStore({
    reducer: mainReducer
});

