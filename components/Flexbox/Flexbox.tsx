import { FC, ReactNode } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";

interface IProps {
    children: ReactNode;
    gap?: number;
    width?: number | string;
    direction?: string;
    align?: string;
    wrap?: string;
    justify?: string;
    style?: any;
    padding?: string;
    margin?: string;
    flex?: string;
    className?: string;
    onClick?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const Flexbox: FC<IProps> = ({
    gap = 0,
    direction = "column",
    align = "stretch",
    justify = "flex-start",
    flex = "",
    children,
    width = "auto",
    wrap = "nowrap",
    style,
    className,
    margin = "",
    padding = "",
    onClick,
}) => {
    const flexStyles = {
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
            style={{ ...flexStyles, ...style }}
            className={className}
        >
            {children}
        </Pressable>
    );
};
