import { EAsyncStorage } from "@/types/asyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const get = async <T = string>(
    key: EAsyncStorage,
    defaultValue: T
): Promise<T> => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null ? (JSON.parse(value) as T) : defaultValue;
    } catch (error: unknown) {
        console.error(error);
        return defaultValue;
    }
};

const remove = async (key: EAsyncStorage): Promise<boolean> => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (error: unknown) {
        console.error(error);
        return false;
    }
};

const set = async <T>(key: EAsyncStorage, value: T): Promise<boolean> => {
    try {
        if (!value) await remove(key);
        await AsyncStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error: unknown) {
        console.error(error);
        return false;
    }
};

export const asyncStorage = { get, set, remove };
