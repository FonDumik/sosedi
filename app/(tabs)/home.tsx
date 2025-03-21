import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Flexbox } from "@/components/Flexbox";
import { HomeButton } from "@/components/HomeButton/HomeButton";
import { HomeNavigation } from "@/components/HomeNavigation";

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <Image
                    source={require("@/assets/images/bg.png")}
                    style={styles.logo}
                />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="subtitle">
                    Добро пожаловать в "Соседи"!
                </ThemedText>
            </ThemedView>
            <HomeNavigation />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    logo: {
        height: 300,
        width: "100%",
    },
});
