import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "@/store/selectors";
import { useRouter } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Flexbox } from "@/components/Flexbox";
import { setUser } from "@/store/slices/userSlice";

export default function ProfileScreen() {
    const dispatch = useDispatch();
    const user = useSelector(UserState);
    const router = useRouter();

    const logoutHandler = async () => {
        await dispatch(
            setUser({
                name: null,
                id: null,
                email: null,
            })
        );
        await router.replace("/");
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
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

                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() =>
                        alert(
                            `"Соседи" - приложение для развития и укрепления взаимоотношений с людьми, которые живут рядом`
                        )
                    }
                >
                    <Text style={styles.buttonText}>О приложении</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.logout]}
                    onPress={logoutHandler}
                >
                    <Text style={styles.buttonText}>Выход</Text>
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
        padding: 20,
        borderRadius: 10,
        backgroundColor: Colors.light.default,
        alignItems: "center",
        width: "90%",
        marginVertical: 10,
    },
    logout: {
        backgroundColor: "orange",
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
