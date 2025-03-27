import { ThemeState } from "@/store/selectors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export const BackButton = ({ onPress }: { onPress: () => void }) => {
    const { colors } = useSelector(ThemeState);
    return (
        <TouchableOpacity onPress={onPress} style={styles.backButton}>
            <Ionicons name="arrow-back" size={34} color={colors.icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
    },
});
