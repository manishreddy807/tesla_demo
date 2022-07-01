import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogInState: (state, actions) => {
            state.user = actions.payload;
        },
        setLogOutState: (state) => {
            state.user = null;
        },
    },
});

export const {setLogInState, setLogOutState} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;