import { Flexbox } from "./Flexbox";
import { HomeButton } from "./HomeButton/HomeButton";
import { ThemedView } from "./ThemedView";

export const HomeNavigation = () => {
    return (
        <ThemedView>
            <Flexbox justify="space-between" gap={70} style={{ marginTop: 20 }}>
                <Flexbox
                    direction="row"
                    gap={16}
                    justify="space-between"
                    align="center"
                >
                    <HomeButton
                        title="Поездки"
                        image={require("@/assets/images/icons/drive.png")}
                    />
                    <HomeButton
                        title="События"
                        image={require("@/assets/images/icons/events.png")}
                    />
                </Flexbox>
                <Flexbox
                    direction="row"
                    gap={16}
                    justify="space-between"
                    align="center"
                >
                    <HomeButton
                        title="Объявления"
                        image={require("@/assets/images/icons/board.png")}
                    />
                    <HomeButton
                        title="Контакты"
                        image={require("@/assets/images/icons/contacts.png")}
                    />
                </Flexbox>
            </Flexbox>
        </ThemedView>
    );
};
