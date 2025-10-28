import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {newsApi} from "../services/newsApi";
import newsSlice from "./newsSlice";

export const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
        news: newsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch