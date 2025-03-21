import {
    StyleSheet,
    Image,
    Platform,
    TextInput,
    TouchableOpacity,
    Text,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { BlurView } from "expo-blur";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "@/store/selectors";
import { Flexbox } from "@/components/Flexbox";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { setUser } from "@/store/slices/userSlice";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function TabTwoScreen() {
    const user = useSelector(UserState);

    const dispatch = useDispatch();
    const router = useRouter();

    const [email, setEmail] = useState(user.email || "");
    const [username, setUsername] = useState(user.name || "");
    const [password, setPassword] = useState(user.password || "");

    const handleChange = () => {
        dispatch(setUser({ email, name: username, id: user.id, password }));
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
            headerImage={<Image source={require("@/assets/images/bg.png")} />}
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">{user.name}</ThemedText>
            </ThemedView>
            <Flexbox>
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
                {/* <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    placeholderTextColor={Colors.light.text}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                /> */}

                <TouchableOpacity style={styles.button} onPress={handleChange}>
                    <Text style={styles.buttonText}>Сохранить</Text>
                </TouchableOpacity>
            </Flexbox>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        position: "absolute",
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
    logo: {
        height: 300,
        width: "100%",
    },
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
