import { ALL_POSTS } from "@/api/data/posts";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PostCard } from "../PostCard";
import { Flexbox } from "../Flexbox";
import * as Crypto from "expo-crypto";

interface IProps {}

export const PostsFeed: FC<IProps> = () => {
    return (
        <Flexbox gap={16} style={styles.feed}>
            {ALL_POSTS.map((post) => (
                <PostCard data={post} key={Crypto.randomUUID()} />
            ))}
        </Flexbox>
    );
};

const styles = StyleSheet.create({
    feed: {
        marginVertical: 20,
    },
});
