import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Flexbox } from "@/components/Flexbox";
import { Colors } from "@/constants/Colors";

export default function TravelMakeScreen() {
    const router = useRouter();

    const goTravelBackScreen = () => router.replace("/(travels)/travels");

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => router.replace("/(travels)/travels")}
                style={styles.backButton}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Создание поездки</Text>
            <Flexbox gap={12} justify="center" align="center">
                <TouchableOpacity
                    style={styles.button}
                    onPress={goTravelBackScreen}
                >
                    <Text style={styles.buttonText}>Создать</Text>
                </TouchableOpacity>
            </Flexbox>
        </View>
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
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 60,
    },
    input: {
        width: "100%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
        marginBottom: 15,
        fontSize: 16,
        height: 60,
    },
    button: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.light.default,
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
