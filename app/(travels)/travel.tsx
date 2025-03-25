import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function TravelScreen() {
    const router = useRouter();
    const { travelData } = useLocalSearchParams();

    if (!travelData) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Ошибка загрузки данных</Text>
            </View>
        );
    }

    const travel = JSON.parse(travelData as string);

    const handleJoinTravel = () => {
        Alert.alert("Вы присоединились к этой поездке!");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Поездка</Text>

                <View style={styles.infoCard}>
                    <Text style={styles.label}>Создатель:</Text>
                    <Text style={styles.value}>{travel.creatorName}</Text>

                    <Text style={styles.label}>Дата и время:</Text>
                    <Text style={styles.value}>
                        {new Date(travel.dateTime).toLocaleString()}
                    </Text>

                    <Text style={styles.label}>Пункт назначения:</Text>
                    <Text style={styles.value}>{travel.destination}</Text>

                    <Text style={styles.label}>Свободных мест:</Text>
                    <Text style={styles.value}>{travel.availableSeats}</Text>

                    <Text style={styles.label}>Стоимость:</Text>
                    <Text style={styles.value}>{travel.price} ₽</Text>

                    <Text style={styles.label}>Машина:</Text>
                    <Text style={styles.value}>
                        {travel.carBrand} {travel.carModel} ({travel.carColor})
                    </Text>

                    <Text style={styles.label}>Контакты:</Text>
                    <Text style={styles.contact}>{travel.contactInfo}</Text>
                </View>

                <TouchableOpacity style={styles.pathButton}>
                    <Text style={styles.buttonText}>Маршрут</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.joinButton}
                    onPress={handleJoinTravel}
                >
                    <Text style={styles.buttonText}>Присоединиться</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 10,
    },
    content: {
        paddingTop: 80,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    infoCard: {
        width: "100%",
        backgroundColor: "#f8f8f8",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        color: "#333",
    },
    contact: {
        fontSize: 16,
        color: Colors.light.default,
        fontWeight: "bold",
        marginTop: 5,
    },
    joinButton: {
        backgroundColor: Colors.light.default,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
    },
    pathButton: {
        backgroundColor: Colors.light.text,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    errorText: {
        fontSize: 18,
        textAlign: "center",
        color: "red",
        marginTop: 50,
    },
});
