import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";
import { asyncStorage } from "@/utils/asyncStorage";
import { EAsyncStorage } from "@/types/asyncStorage";

type ThemeType = "light" | "dark" | "system";

interface ThemeState {
    theme: ThemeType;
    colors: typeof Colors.light;
}

const initialState: ThemeState = {
    theme: "system",
    colors: Appearance.getColorScheme() === "dark" ? Colors.dark : Colors.light,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            state.theme = action.payload;
            state.colors =
                action.payload === "dark" ? Colors.dark : Colors.light;
            asyncStorage
                .set(EAsyncStorage.Theme, action.payload)
                .catch((err) => console.error("Ошибка сохранения темы:", err));
        },
        loadTheme: (state, action: PayloadAction<ThemeType>) => {
            state.theme = action.payload;
            state.colors =
                action.payload === "dark" ? Colors.dark : Colors.light;
        },
    },
});

export const { setTheme, loadTheme } = themeSlice.actions;
export default themeSlice.reducer;
