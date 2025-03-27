import { useTheme } from "@/hooks/useTheme";
import { Switch, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Flexbox } from "../Flexbox";

export const ThemePicker = () => {
    const { theme, colors, changeTheme } = useTheme();

    return (
        <Flexbox
            direction="row"
            justify="space-between"
            align="center"
            width={"100%"}
            style={{ backgroundColor: colors.background, padding: 20 }}
        >
            <ThemedText style={{ color: colors.text, fontSize: 20 }}>
                {theme.theme === "dark" ? "Тёмная" : "Светлая"} тема
            </ThemedText>
            <Switch
                value={theme.theme === "dark"}
                onValueChange={(val) => changeTheme(val ? "dark" : "light")}
            />
        </Flexbox>
    );
};
