import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/login/loginSlice';
import workListReducer from './features/WorkList/WorkListSlice';

// const rootReducer = {
//     login: loginReducer,
//     workList: workListReducer,
// };

export const store = configureStore({
    reducer: {
        login: loginReducer,
        workList: workListReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
