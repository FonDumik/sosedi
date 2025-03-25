import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert,
    ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function TravelMakeScreen() {
    const router = useRouter();

    const [travelData, setTravelData] = useState({
        creatorName: "",
        dateTime: "",
        destination: "",
        availableSeats: "",
        price: "",
        carBrand: "",
        carModel: "",
        carColor: "",
        contactInfo: "",
    });

    const handleChange = (key: string, value: string) => {
        setTravelData((prev) => ({ ...prev, [key]: value }));
    };

    const handleCreate = () => {
        Alert.alert("Поездка создана", "Ваша поездка успешно добавлена!");
        router.replace("/(travels)/travels");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => router.replace("/(travels)/travels")}
                style={styles.backButton}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.title}>Создание поездки</Text>

            <ScrollView contentContainerStyle={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Имя создателя"
                    value={travelData.creatorName}
                    onChangeText={(text) => handleChange("creatorName", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Дата и время (ГГГГ-ММ-ДД ЧЧ:ММ)"
                    value={travelData.dateTime}
                    onChangeText={(text) => handleChange("dateTime", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Пункт назначения"
                    value={travelData.destination}
                    onChangeText={(text) => handleChange("destination", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Свободные места"
                    keyboardType="numeric"
                    value={travelData.availableSeats}
                    onChangeText={(text) =>
                        handleChange("availableSeats", text)
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder="Цена (₽)"
                    keyboardType="numeric"
                    value={travelData.price}
                    onChangeText={(text) => handleChange("price", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Марка машины"
                    value={travelData.carBrand}
                    onChangeText={(text) => handleChange("carBrand", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Модель машины"
                    value={travelData.carModel}
                    onChangeText={(text) => handleChange("carModel", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Цвет машины"
                    value={travelData.carColor}
                    onChangeText={(text) => handleChange("carColor", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Контакты"
                    value={travelData.contactInfo}
                    onChangeText={(text) => handleChange("contactInfo", text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleCreate}>
                    <Text style={styles.buttonText}>Создать</Text>
                </TouchableOpacity>
            </ScrollView>
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
        marginBottom: 20,
    },
    form: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    input: {
        width: "100%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
        marginBottom: 15,
        fontSize: 16,
        height: 50,
    },
    button: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.light.default,
        alignItems: "center",
        width: "100%",
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
