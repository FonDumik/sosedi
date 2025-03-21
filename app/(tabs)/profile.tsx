import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { UserState } from "@/store/selectors";
import { useRouter } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Flexbox } from "@/components/Flexbox";

export default function ProfileScreen() {
    const user = useSelector(UserState);
    const router = useRouter();

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
            // headerImage={<Image source={require("@/assets/images/bg.png")} />}
            headerImage={
                <Flexbox
                    justify="center"
                    align="center"
                    style={styles.avatarContainer}
                >
                    <Image
                        source={
                            user.avatar
                                ? { uri: user.avatar }
                                : require("@/assets/images/boy.png")
                        }
                        style={styles.avatar}
                    />
                </Flexbox>
            }
        >
            <View style={styles.container}>
                {/* <Image
                    source={
                        user.avatar
                            ? { uri: user.avatar }
                            : require("@/assets/images/boy.png")
                    }
                    style={styles.avatar}
                /> */}
                <ThemedText type="title" style={styles.username}>
                    {user.name || "Имя не указано"}
                </ThemedText>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.replace("/(settings)/settings")}
                >
                    <Text style={styles.buttonText}>Настройки</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.telegramButton]}
                    onPress={() => alert("Подключение Telegram в разработке")}
                >
                    <Text style={styles.buttonText}>Подключить Telegram</Text>
                </TouchableOpacity>
            </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
    },
    avatar: {
        width: 170,
        height: 170,
        borderRadius: 60,
        marginBottom: 15,
    },
    username: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.light.default,
        alignItems: "center",
        width: "90%",
        marginVertical: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    telegramButton: {
        backgroundColor: "#0088CC",
    },
    avatarContainer: {
        marginTop: 70,
    },
});
