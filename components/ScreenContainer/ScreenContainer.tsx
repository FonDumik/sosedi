import { ThemeState } from "@/store/selectors";
import React, { ReactNode } from "react";
import {
    Keyboard,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableWithoutFeedback,
} from "react-native";
import { useSelector } from "react-redux";

type TProps = {
    isDismiss?: boolean;
    children?: ReactNode;
    isAndroidPadding?: boolean;
};

export const ScreenContainer: React.FC<TProps> = ({
    children,
    isAndroidPadding,
    isDismiss,
}) => {
    const styles = useStyles();

    if (isDismiss) {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView
                    style={[
                        styles.root,
                        isAndroidPadding && styles.androidPadding,
                    ]}
                >
                    {children}
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }

    return (
        <SafeAreaView
            style={[styles.root, isAndroidPadding && styles.androidPadding]}
        >
            {children}
        </SafeAreaView>
    );
};

const useStyles = () => {
    const { colors } = useSelector(ThemeState);

    return StyleSheet.create({
        root: {
            flex: 1,
            backgroundColor: colors.background,
        },
        androidPadding: {
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
    });
};
