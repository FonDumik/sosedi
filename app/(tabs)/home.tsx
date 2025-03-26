import { Image, ScrollView, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HomeNavigation } from "@/components/HomeNavigation";
import { PostsFeed } from "@/components/PostsFeed";
import { Flexbox } from "@/components/Flexbox";

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
            <ScrollView>
                <Flexbox gap={60}>
                    <ThemedView style={styles.stepContainer}>
                        <ThemedText type="subtitle">
                            Добро пожаловать в "Соседи"!
                        </ThemedText>
                        <HomeNavigation />
                    </ThemedView>

                    <ThemedView style={styles.stepContainer}>
                        <ThemedText type="subtitle">Лента постов:</ThemedText>
                        <PostsFeed />
                    </ThemedView>
                </Flexbox>
            </ScrollView>
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
