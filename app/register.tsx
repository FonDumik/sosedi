import { Colors } from "@/constants/Colors";
import { setUser } from "@/store/slices/userSlice";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import * as Crypto from "expo-crypto";

export default function RegisterScreen() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        if (email && username && password) {
            dispatch(
                setUser({
                    id: Crypto.randomUUID(),
                    name: username,
                    email,
                    isGuest: false,
                })
            );

            router.replace("/(tabs)/home");
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("@/assets/images/bg.png")}
                style={styles.background}
            >
                <BlurView intensity={20} style={styles.blurContainer}>
                    <Text style={styles.title}>Регистрация</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Логин"
                        placeholderTextColor={Colors.light.text}
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={Colors.light.text}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Пароль"
                        placeholderTextColor={Colors.light.text}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleRegister}
                    >
                        <Text style={styles.buttonText}>
                            Зарегистрироваться
                        </Text>
                    </TouchableOpacity>
                </BlurView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    blurContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        color: Colors.dark.default,
        fontWeight: "700",
    },
    input: {
        width: "90%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.light.default,
        alignItems: "center",
        width: "90%",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
