import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ALL_POSTS, IUserPost } from "@/api/data/posts";
import * as Crypto from "expo-crypto";
import { Flexbox } from "@/components/Flexbox";
import { ThemedText } from "@/components/ThemedText";
import { ScreenContainer } from "@/components/ScreenContainer";
import { BackButton } from "@/components/BackButton";

export default function PostScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const [post, setPost] = useState<IUserPost | null>(null);

    useEffect(() => {
        const foundPost = ALL_POSTS.find((p) => p.id === id);
        if (foundPost) setPost(foundPost);
    }, [id]);

    if (!post) return <ThemedText>Загрузка...</ThemedText>;

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <BackButton onPress={() => router.replace("/(tabs)/home")} />
                <Flexbox style={{ marginTop: 80 }}>
                    <ThemedText style={styles.title}>{post.content}</ThemedText>
                    <ThemedText style={styles.author}>
                        Автор: {post.authorName}
                    </ThemedText>
                    <ThemedText style={styles.date}>
                        {new Date(post.createdAt).toLocaleString()}
                    </ThemedText>

                    <View style={styles.footer}>
                        <ThemedText style={styles.likes}>
                            ❤️ {post.likes}
                        </ThemedText>
                        <ThemedText style={styles.comments}>
                            💬 {post.commentsCount} комментариев
                        </ThemedText>
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
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
