import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableNativeFeedback,
} from "react-native";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { IUserPost } from "@/api/data/posts";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { useRouter } from "expo-router";

interface PostCardProps {
    data: IUserPost;
}

export const PostCard: React.FC<PostCardProps> = ({ data }) => {
    const router = useRouter();

    const handlePress = () => {
        router.push(`/(posts)/post?id=${data.id}`);
    };

    return (
        <TouchableNativeFeedback onPress={handlePress}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Image
                        source={{ uri: data.authorAvatar }}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.author}>{data.authorName}</Text>
                        <Text style={styles.date}>
                            {formatDistanceToNow(new Date(data.createdAt), {
                                addSuffix: true,
                                locale: ru,
                            })}
                        </Text>
                    </View>
                </View>
                <Text style={styles.content}>{data.content}</Text>
                {data.image && (
                    <Image
                        source={{ uri: data.image }}
                        style={styles.postImage}
                    />
                )}
                <View style={styles.footer}>
                    <Text style={styles.likes}>❤️ {data.likes}</Text>
                    <Text style={styles.comments}>
                        💬 {data.commentsCount} комментариев
                    </Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        objectFit: "contain",
        backgroundColor: "#eee",
    },
    author: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    date: {
        fontSize: 12,
        color: "#666",
    },
    content: {
        fontSize: 16,
        color: "#333",
        marginBottom: 10,
    },
    postImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: "#eee",
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
