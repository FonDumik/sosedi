import { useState } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert,
    ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { useSelector } from "react-redux";
import { ThemeState } from "@/store/selectors";
import { ScreenContainer } from "@/components/ScreenContainer";
import { BackButton } from "@/components/BackButton";

export default function TravelMakeScreen() {
    const router = useRouter();
    const styles = useStyles();

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
        <ScreenContainer>
            <View style={styles.container}>
                <BackButton
                    onPress={() => router.replace("/(travels)/travels")}
                />

                <ThemedText style={styles.title}>Создание поездки</ThemedText>

                <ScrollView contentContainerStyle={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Имя создателя"
                        value={travelData.creatorName}
                        onChangeText={(text) =>
                            handleChange("creatorName", text)
                        }
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
                        onChangeText={(text) =>
                            handleChange("destination", text)
                        }
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
                        onChangeText={(text) =>
                            handleChange("contactInfo", text)
                        }
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleCreate}
                    >
                        <ThemedText style={styles.buttonText}>
                            Создать
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
            backgroundColor: colors.backgroundSecondary,
            marginBottom: 15,
            fontSize: 16,
            height: 50,
        },
        button: {
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
            width: "100%",
            marginTop: 20,
            backgroundColor: colors.success,
        },
        buttonText: {
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
        },
    });
};
