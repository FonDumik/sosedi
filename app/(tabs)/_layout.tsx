import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        position: "absolute",
                    },
                    default: {},
                }),
                headerBackButtonDisplayMode: "default",
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
