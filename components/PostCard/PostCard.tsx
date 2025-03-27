import React, { useState } from "react";
import {
    View,
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
import { ThemedText } from "../ThemedText";
import { useSelector } from "react-redux";
import { ThemeState } from "@/store/selectors";

interface PostCardProps {
    data: IUserPost;
}

export const PostCard: React.FC<PostCardProps> = ({ data }) => {
    const router = useRouter();
    const styles = useStyles();

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
                        <ThemedText style={styles.author}>
                            {data.authorName}
                        </ThemedText>
                        <ThemedText style={styles.date}>
                            {formatDistanceToNow(new Date(data.createdAt), {
                                addSuffix: true,
                                locale: ru,
                            })}
                        </ThemedText>
                    </View>
                </View>
                <ThemedText style={styles.content}>{data.content}</ThemedText>
                {data.image && (
                    <Image
                        source={{ uri: data.image }}
                        style={styles.postImage}
                    />
                )}
                <View style={styles.footer}>
                    <ThemedText style={styles.likes}>
                        ❤️ {data.likes}
                    </ThemedText>
                    <ThemedText style={styles.comments}>
                        💬 {data.commentsCount} комментариев
                    </ThemedText>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

const useStyles = () => {
    const { colors } = useSelector(ThemeState);

    return StyleSheet.create({
        card: {
            backgroundColor: colors.backgroundSecondary,
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
            backgroundColor: colors.icon,
        },
        author: {
            fontSize: 16,
            fontWeight: "bold",
        },
        date: {
            fontSize: 12,
        },
        content: {
            fontSize: 16,
            marginBottom: 10,
        },
        postImage: {
            width: "100%",
            height: 200,
            borderRadius: 10,
            marginBottom: 10,
            backgroundColor: colors.icon,
        },
        footer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
        },
        likes: {
            fontSize: 14,
            color: colors.error,
        },
        comments: {
            fontSize: 14,
            color: colors.primary,
        },
    });
};
