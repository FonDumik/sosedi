import {
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ScreenContainer } from "@/components/ScreenContainer";
import { useSelector } from "react-redux";
import { ThemeState } from "@/store/selectors";
import { BackButton } from "@/components/BackButton";

export default function TravelScreen() {
    const router = useRouter();
    const { travelData } = useLocalSearchParams();
    const styles = useStyles();

    if (!travelData) {
        return (
            <View style={styles.container}>
                <ThemedText style={styles.errorText}>
                    Ошибка загрузки данных
                </ThemedText>
            </View>
        );
    }

    const travel = JSON.parse(travelData as string);

    const handleJoinTravel = () => {
        Alert.alert("Вы присоединились к этой поездке!");
    };

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <BackButton onPress={() => router.back()} />
                <ScrollView contentContainerStyle={styles.content}>
                    <ThemedText style={styles.title}>Поездка</ThemedText>

                    <View style={styles.infoCard}>
                        <ThemedText style={styles.label}>Создатель:</ThemedText>
                        <ThemedText style={styles.value}>
                            {travel.creatorName}
                        </ThemedText>

                        <ThemedText style={styles.label}>
                            Дата и время:
                        </ThemedText>
                        <ThemedText style={styles.value}>
                            {new Date(travel.dateTime).toLocaleString()}
                        </ThemedText>

                        <ThemedText style={styles.label}>
                            Пункт назначения:
                        </ThemedText>
                        <ThemedText style={styles.value}>
                            {travel.destination}
                        </ThemedText>

                        <ThemedText style={styles.label}>
                            Свободных мест:
                        </ThemedText>
                        <ThemedText style={styles.value}>
                            {travel.availableSeats}
                        </ThemedText>

                        <ThemedText style={styles.label}>Стоимость:</ThemedText>
                        <ThemedText style={styles.value}>
                            {travel.price} ₽
                        </ThemedText>

                        <ThemedText style={styles.label}>Машина:</ThemedText>
                        <ThemedText style={styles.value}>
                            {travel.carBrand} {travel.carModel} (
                            {travel.carColor})
                        </ThemedText>

                        <ThemedText style={styles.label}>Контакты:</ThemedText>
                        <ThemedText style={styles.contact}>
                            {travel.contactInfo}
                        </ThemedText>
                    </View>

                    <TouchableOpacity style={styles.pathButton}>
                        <ThemedText style={styles.buttonText}>
                            Маршрут
                        </ThemedText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.joinButton}
                        onPress={handleJoinTravel}
                    >
                        <ThemedText style={styles.buttonText}>
                            Присоединиться
                        </ThemedText>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ScreenContainer>
    );
}

const useStyles = () => {
    const { colors } = useSelector(ThemeState);
    return StyleSheet.create({
        container: {
            flex: 1,
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
            backgroundColor: colors.backgroundSecondary,
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
        },
        contact: {
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 5,
        },
        joinButton: {
            backgroundColor: colors.success,
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 10,
            alignItems: "center",
            width: "100%",
        },
        pathButton: {
            backgroundColor: colors.textSecondary,
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
};
