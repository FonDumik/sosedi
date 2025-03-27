import { ITravel } from "@/api/data/travels";
import { Colors } from "@/constants/Colors";
import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "../ThemedText";
import { useSelector } from "react-redux";
import { ThemeState } from "@/store/selectors";

interface IProps {
    data: ITravel;
}

export const TravelCard: FC<IProps> = ({ data }) => {
    const styles = useStyles();
    const router = useRouter();

    const handlePress = () => {
        router.push({
            pathname: "/(travels)/travel",
            params: { travelData: JSON.stringify(data) },
        });
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <ThemedText style={styles.creator}>{data.creatorName}</ThemedText>
            <ThemedText style={styles.text}>
                Дата и время: {new Date(data.dateTime).toLocaleString()}
            </ThemedText>
            <ThemedText style={styles.text}>
                Пункт назначения: {data.destination}
            </ThemedText>
            <ThemedText style={styles.text}>
                Свободных мест: {data.availableSeats}
            </ThemedText>
            <ThemedText style={styles.text}>Цена: {data.price} ₽</ThemedText>
            <ThemedText style={styles.text}>
                Машина: {data.carBrand} {data.carModel} ({data.carColor})
            </ThemedText>
            <ThemedText style={styles.contact}>
                Контакты: {data.contactInfo}
            </ThemedText>
        </TouchableOpacity>
    );
};

const useStyles = () => {
    const { colors } = useSelector(ThemeState);

    return StyleSheet.create({
        card: {
            backgroundColor: colors.backgroundSecondary,
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
        },
        contact: {
            fontSize: 16,
            color: colors.primary,
            fontWeight: "bold",
            marginTop: 5,
        },
    });
};
