import { Tabs } from "expo-router";
import React, { useMemo } from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useSelector } from "react-redux";
import { ThemeState } from "@/store/selectors";
import { StyleProps } from "react-native-reanimated";

export default function TabLayout() {
    const theme = useSelector(ThemeState);

    const tabBarStyle = useMemo(
        () => ({
            position: Platform.OS === "ios" ? "absolute" : "relative",
            backgroundColor:
                theme.theme === "light"
                    ? Colors.light.backgroundSecondary
                    : Colors.dark.backgroundSecondary,
        }),
        [theme.theme]
    );

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor:
                    theme.theme === "light"
                        ? Colors.light.primary
                        : Colors.dark.primaryLight,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarStyle: tabBarStyle as StyleProps,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Главное",
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={28} name="house.fill" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="post"
                options={{
                    title: "Пост",
                    tabBarIcon: ({ color }) => (
                        <IconSymbol
                            size={28}
                            name="plus.app.fill"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Я",
                    tabBarIcon: ({ color }) => (
                        <IconSymbol
                            size={28}
                            name="person.fill"
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
