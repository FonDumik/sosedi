import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ALL_POSTS, IUserPost } from "@/api/data/posts";
import * as Crypto from "expo-crypto";
import { Flexbox } from "@/components/Flexbox";
import { ThemedText } from "@/components/ThemedText";

interface IPost {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
}

export default function PostScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const [post, setPost] = useState<IUserPost | null>(null);

    useEffect(() => {
        const foundPost = ALL_POSTS.find((p) => p.id === id);
        if (foundPost) setPost(foundPost);
    }, [id]);

    if (!post) return <Text>Загрузка...</Text>;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => router.replace("/(tabs)/home")}
                style={styles.backButton}
            >
                <Ionicons name="arrow-back" size={34} color="black" />
            </TouchableOpacity>
            <Flexbox style={{ marginTop: 80 }}>
                <ThemedText style={styles.title}>{post.content}</ThemedText>
                <Text style={styles.author}>Автор: {post.authorName}</Text>
                <Text style={styles.date}>
                    {new Date(post.createdAt).toLocaleString()}
                </Text>

                <View style={styles.footer}>
                    <Text style={styles.likes}>❤️ {post.likes}</Text>
                    <Text style={styles.comments}>
                        💬 {post.commentsCount} комментариев
                    </Text>
                </View>

                {post.image && (
                    <Image
                        key={Crypto.randomUUID()}
                        source={{ uri: post.image }}
                        style={styles.image}
                    />
                )}

                <Flexbox gap={16} style={{ marginTop: 30 }}>
                    <ThemedText type="subtitle">Комментарии:</ThemedText>
                    <ThemedText>Комментариев нет</ThemedText>
                </Flexbox>
            </Flexbox>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
        marginVertical: 10,
    },
    author: {
        fontSize: 16,
        color: "#555",
    },
    date: {
        fontSize: 14,
        color: "#888",
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        color: "#333",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    likes: {
        fontSize: 14,
        color: "#e74c3c",
    },
    comments: {
        fontSize: 14,
        color: "#3498db",
    },
});
