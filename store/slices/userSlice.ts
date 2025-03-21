import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id: string | null;
    name: string | null;
    email: string | null;
    avatar?: string | null;
    telegram?: string | null;
    password?: string | null;
    isGuest?: boolean;
}

const initialState: UserState = {
    id: null,
    name: null,
    email: null,
    avatar: null,
    telegram: null,
    password: null,
    isGuest: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isGuest = action.payload.isGuest;
        },
        logout: (state) => {
            state = initialState;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
