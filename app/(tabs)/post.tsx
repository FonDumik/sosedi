import { useState } from "react";
import {
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ScreenContainer } from "@/components/ScreenContainer";
import { ThemeState } from "@/store/selectors";
import { useSelector } from "react-redux";

export default function NewPostScreen() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState<string[]>([]);
    const styles = useStyles();

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled && result.assets.length > 0) {
            setImages([...images, result.assets[0].uri]);
        }
    };

    const createPost = () => {
        if (!title.trim() || !content.trim()) {
            Alert.alert("Ошибка", "Заполните все поля!");
            return;
        }

        Alert.alert("Готово", "Пост успешно опубликован!");
        router.back();
    };

    return (
        <ScreenContainer>
            <ScrollView style={styles.container}>
                <ThemedText style={styles.title}>Создание поста</ThemedText>

                <TextInput
                    style={styles.input}
                    placeholder="Заголовок поста"
                    value={title}
                    onChangeText={setTitle}
                />

                <TextInput
                    style={[styles.input, styles.textarea]}
                    placeholder="Напишите что-то..."
                    value={content}
                    onChangeText={setContent}
                    multiline
                />

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.imageContainer}
                >
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            source={{ uri: img }}
                            style={styles.image}
                        />
                    ))}
                </ScrollView>

                <TouchableOpacity
                    style={styles.imageButton}
                    onPress={pickImage}
                >
                    <Ionicons name="camera" size={24} color="white" />
                    <ThemedText style={styles.imageButtonText}>
                        Добавить фото
                    </ThemedText>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.publishButton}
                    onPress={createPost}
                >
                    <ThemedText style={styles.publishButtonText}>
                        Опубликовать
                    </ThemedText>
                </TouchableOpacity>
            </ScrollView>
        </ScreenContainer>
    );
}

const useStyles = () => {
    const { colors } = useSelector(ThemeState);

    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            paddingTop: 80,
        },
        backButton: {
            position: "absolute",
            top: 50,
            left: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
        },
        input: {
            width: "100%",
            padding: 15,
            borderRadius: 10,
            backgroundColor: colors.backgroundSecondary,
            marginBottom: 15,
            fontSize: 16,
        },
        textarea: {
            height: 120,
            textAlignVertical: "top",
        },
        imageContainer: {
            flexDirection: "row",
            marginBottom: 15,
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 10,
            marginRight: 10,
        },
        imageButton: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 15,
            borderRadius: 10,
            backgroundColor: colors.primaryLight,
            marginBottom: 15,
        },
        imageButtonText: {
            color: "white",
            fontSize: 16,
            marginLeft: 8,
        },
        publishButton: {
            padding: 15,
            borderRadius: 10,
            backgroundColor: colors.success,
            alignItems: "center",
        },
        publishButtonText: {
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
        },
    });
};
