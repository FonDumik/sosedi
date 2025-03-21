import { Flexbox } from "@/components/Flexbox";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { UserState } from "@/store/selectors";
import { setUser } from "@/store/slices/userSlice";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const AuthScreen: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector(UserState);
    const router = useRouter();

    // Если пользователь уже авторизован, перенаправляем в приложение
    useEffect(() => {
        if (user.id) {
            router.replace("/(tabs)/home");
        }
    }, [user]);

    const handleLogin = () => {
        dispatch(
            setUser({ id: "123", name: "Гость", email: "", isGuest: true })
        );
        router.replace("/(tabs)/home"); // Перенаправляем после входа
    };

    const navigateToRegister = () => {
        router.push("/register"); // Исправленный переход на регистрацию
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("@/assets/images/bg.png")}
                style={{ flex: 1, width: "100%", height: "100%" }}
            >
                <BlurView intensity={10} style={styles.blurContainer}>
                    <Text style={styles.title}>Соседи</Text>

                    <Flexbox gap={16} align="center" justify="center">
                        <TouchableOpacity
                            onPress={handleLogin}
                            style={styles.button}
                        >
                            <ThemedText
                                type="defaultSemiBold"
                                style={styles.buttonText}
                            >
                                Вход
                            </ThemedText>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={navigateToRegister}
                            style={styles.button}
                        >
                            <ThemedText
                                type="defaultSemiBold"
                                style={styles.buttonText}
                            >
                                Регистрация
                            </ThemedText>
                        </TouchableOpacity>
                    </Flexbox>
                </BlurView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    blurContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 72,
        marginBottom: 20,
        color: Colors.dark.default,
        textAlign: "center",
        fontWeight: "700",
    },
    button: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.light.background,
        textAlign: "center",
        width: 200,
    },
    buttonText: {
        color: Colors.light.background,
        textAlign: "center",
        fontSize: 18,
    },
});

export default AuthScreen;
