import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
    GestureResponderEvent,
} from "react-native";

interface IProps {
    title: string;
    image?: ImageSourcePropType;
    onPress?: (event: GestureResponderEvent) => void;
}
export const HomeButton: FC<IProps> = ({ onPress, title, image }) => {
    const [isPressed, setIsPressed] = React.useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <TouchableOpacity
            style={[styles.container, isPressed && styles.pressed]}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: 150,
        height: 70,
    },
    pressed: {
        transform: [{ scale: 0.95 }],
    },
    image: {
        width: 102,
        height: 80,
        objectFit: "contain",
        overflow: "visible",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20,
    },
});
