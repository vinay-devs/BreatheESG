import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user";


export const store = configureStore({
    reducer: user
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


