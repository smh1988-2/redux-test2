import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {},
    },
    reducers: {
        handleLogin: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { handleLogin } = userSlice.actions

export const selectUser = state => state.user.value

export default userSlice.reducer