import { RootState } from "./store";

export const UserState = (state: RootState) => state.user;

export const AppState = (state: RootState) => state.app;

export const ThemeState = (state: RootState) => state.theme;
