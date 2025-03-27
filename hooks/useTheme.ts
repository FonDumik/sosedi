import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "@/store/slices/themeSlice";
import { ThemeState } from "@/store/selectors";

export const useTheme = () => {
    const theme = useSelector(ThemeState);
    const colors = theme.colors;

    const dispatch = useDispatch();

    const changeTheme = (newTheme: "light" | "dark" | "system") => {
        dispatch(setTheme(newTheme));
    };

    return { theme, colors, changeTheme };
};
