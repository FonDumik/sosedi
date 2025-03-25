import { ITravel } from "@/api/data/travels";
import { Colors } from "@/constants/Colors";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface IProps {
    data: ITravel;
}

export const TravelCard: FC<IProps> = ({ data }) => {
    const router = useRouter();

    const handlePress = () => {
        router.push({
            pathname: "/(travels)/travel",
            params: { travelData: JSON.stringify(data) },
        });
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Text style={styles.creator}>{data.creatorName}</Text>
            <Text style={styles.text}>
                Дата и время: {new Date(data.dateTime).toLocaleString()}
            </Text>
            <Text style={styles.text}>
                Пункт назначения: {data.destination}
            </Text>
            <Text style={styles.text}>
                Свободных мест: {data.availableSeats}
            </Text>
            <Text style={styles.text}>Цена: {data.price} ₽</Text>
            <Text style={styles.text}>
                Машина: {data.carBrand} {data.carModel} ({data.carColor})
            </Text>
            <Text style={styles.contact}>Контакты: {data.contactInfo}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f8f8f8",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    creator: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        color: "#333",
    },
    contact: {
        fontSize: 16,
        color: Colors.light.default,
        fontWeight: "bold",
        marginTop: 5,
    },
});
