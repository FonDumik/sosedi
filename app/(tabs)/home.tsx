import { Image, ScrollView, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { HomeNavigation } from "@/components/HomeNavigation";
import { PostsFeed } from "@/components/PostsFeed";
import { Flexbox } from "@/components/Flexbox";

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerImage={
                <Image
                    source={require("@/assets/images/bg.png")}
                    style={styles.logo}
                />
            }
        >
            <Flexbox gap={60}>
                <HomeNavigation />

                <Flexbox>
                    <ThemedText type="title">Лента постов:</ThemedText>
                    <PostsFeed />
                </Flexbox>
            </Flexbox>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    subContainer: {
        gap: 8,
        marginBottom: 8,
    },
    logo: {
        height: 300,
        width: "100%",
    },
});
