import { useState } from "react";
import {
    View,
    Text,
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

export default function NewPostScreen() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState<string[]>([]);

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
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Создание поста</Text>

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

            <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                <Ionicons name="camera" size={24} color="white" />
                <Text style={styles.imageButtonText}>Добавить фото</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.publishButton} onPress={createPost}>
                <Text style={styles.publishButtonText}>Опубликовать</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 80,
        backgroundColor: "#fff",
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
        backgroundColor: "#f0f0f0",
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
        backgroundColor: Colors.light.default,
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
        backgroundColor: Colors.light.text,
        alignItems: "center",
    },
    publishButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
