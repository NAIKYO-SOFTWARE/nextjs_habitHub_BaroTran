import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    email: string;
    password: string;
}

const initialState: LoginState = {
    email: '',
    password: '',
};

const loginSlide = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<LoginState>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    },
});

const { actions, reducer } = loginSlide;
export const { setLogin } = actions;
export default reducer;
