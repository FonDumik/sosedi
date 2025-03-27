import { loadTheme } from "@/store/slices/themeSlice";
import { EAsyncStorage } from "@/types/asyncStorage";
import { asyncStorage } from "@/utils/asyncStorage";
import { useEffect } from "react";
import { Appearance } from "react-native";
import { useDispatch } from "react-redux";

export const ThemeProvider = (props: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTheme = async () => {
            // await asyncStorage.remove(EAsyncStorage.Theme);
            const savedTheme = await asyncStorage.get(
                EAsyncStorage.Theme,
                "light"
            );
            const systemTheme = Appearance.getColorScheme();
            dispatch(
                loadTheme(
                    savedTheme
                        ? (savedTheme as "light" | "dark")
                        : systemTheme || "light"
                )
            );
        };
        fetchTheme();
    }, [dispatch]);

    return <>{props.children}</>;
};
