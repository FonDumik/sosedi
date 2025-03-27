import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import appReducer from "./slices/appSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        app: appReducer,
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
