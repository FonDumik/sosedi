import {
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ThemeState, UserState } from "@/store/selectors";
import { setUser } from "@/store/slices/userSlice";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Flexbox } from "@/components/Flexbox";
import { ScreenContainer } from "@/components/ScreenContainer";
import { ThemedText } from "@/components/ThemedText";
import { BackButton } from "@/components/BackButton";

export default function SettingsScreen() {
    const user = useSelector(UserState);
    const dispatch = useDispatch();
    const router = useRouter();
    const styles = useStyles();

    const [email, setEmail] = useState(user.email || "");
    const [username, setUsername] = useState(user.name || "");
    const [password, setPassword] = useState(user.password || "");
    const [avatar, setAvatar] = useState(user.avatar || "");

    const handleSave = () => {
        dispatch(
            setUser({ email, name: username, id: user.id, password, avatar })
        );
    };

    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setAvatar(result.assets[0].uri);
        }
    };

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <BackButton onPress={() => router.replace("/(tabs)/profile")} />

                <ThemedText style={styles.title}>Настройки</ThemedText>
                <Flexbox gap={12} justify="center" align="center">
                    <TouchableOpacity onPress={handlePickImage}>
                        <Image
                            source={
                                avatar
                                    ? { uri: avatar }
                                    : require("@/assets/images/boy.png")
                            }
                            style={styles.avatar}
                        />
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        placeholder="Логин"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Пароль"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSave}
                    >
                        <ThemedText style={styles.buttonText}>
                            Сохранить
                        </ThemedText>
                    </TouchableOpacity>
                </Flexbox>
            </View>
        </ScreenContainer>
    );
}

const useStyles = () => {
    const { colors } = useSelector(ThemeState);
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
        },
        backButton: {
            position: "absolute",
            top: 50,
            left: 20,
        },
        avatar: {
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 60,
        },
        input: {
            width: "100%",
            padding: 15,
            borderRadius: 10,
            backgroundColor: colors.backgroundSecondary,
            color: colors.textSecondary,
            marginBottom: 15,
            fontSize: 16,
            height: 60,
        },
        button: {
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
            backgroundColor: colors.success,
            width: "100%",
        },
        buttonText: {
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
        },
    });
};
