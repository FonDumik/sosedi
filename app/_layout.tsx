import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ThemeProvider } from "@/components/ThemeProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <ThemeProvider>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                />
                <StatusBar style="light" />
            </ThemeProvider>
        </Provider>
    );
}
