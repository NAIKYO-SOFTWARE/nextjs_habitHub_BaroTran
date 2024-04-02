import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../lib/features/login/loginSilce';

const rootReducer = {
    login: loginReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
