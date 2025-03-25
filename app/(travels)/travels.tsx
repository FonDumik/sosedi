import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { ALL_TRAVELS, ITravel } from "@/api/data/travels";
import { TravelCard } from "@/components/TravelCard/TravelCard";

export default function TravelScreen() {
    const router = useRouter();
    const [travels, setTravels] = useState<ITravel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            fetchTravels();
        }, 1500);
    }, []);

    const fetchTravels = async () => {
        setTravels(ALL_TRAVELS);
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => router.replace("/(tabs)/home")}
                style={styles.backButton}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Совместные поездки</Text>

            {loading ? (
                <ActivityIndicator size="large" color={Colors.light.default} />
            ) : (
                <FlatList
                    data={travels}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <TravelCard data={item} />}
                />
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.replace("/(travels)/makeTravel")}
            >
                <Text style={styles.buttonText}>Создать поездку</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 60,
        marginBottom: 30,
    },

    button: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.light.default,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
