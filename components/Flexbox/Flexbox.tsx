import { FC, ReactNode } from "react";
import {
    GestureResponderEvent,
    Pressable,
    View,
    StyleProp,
    ViewStyle,
    DimensionValue,
} from "react-native";

interface IProps {
    children: ReactNode;
    gap?: number;
    width?: DimensionValue;
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    justify?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly";
    style?: StyleProp<ViewStyle>;
    padding?: number;
    margin?: number;
    flex?: number;
    className?: string;
    onClick?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const Flexbox: FC<IProps> = ({
    gap = 0,
    direction = "column",
    align = "stretch",
    justify = "flex-start",
    flex,
    children,
    width = "auto",
    wrap = "nowrap",
    style,
    className,
    margin,
    padding,
    onClick,
}) => {
    const flexStyles: ViewStyle = {
        display: "flex",
        gap,
        flex,
        width,
        flexDirection: direction,
        alignItems: align,
        flexWrap: wrap,
        justifyContent: justify,
        padding,
        margin,
    };

    return (
        <Pressable
            onPress={onClick}
            style={[flexStyles, style]} // Используем массив для объединения стилей
        >
            {children}
        </Pressable>
    );
};
