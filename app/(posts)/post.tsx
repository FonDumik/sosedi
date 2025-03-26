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
        <ScrollView style={styles.container}>
            <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{post.content}</Text>
            <Text style={styles.author}>Автор: {post.authorName}</Text>
            <Text style={styles.date}>
                {new Date(post.createdAt).toLocaleString()}
            </Text>

            {post.image && (
                <Image
                    key={Crypto.randomUUID()}
                    source={{ uri: post.image }}
                    style={styles.image}
                />
            )}

            <Text style={styles.content}>{post.content}</Text>
        </ScrollView>
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
});
