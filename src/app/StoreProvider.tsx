'use client';
import { Provider } from 'react-redux';
import store from '../lib/store';
interface LoginState {
    email: string;
    password: string;
}
export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Provider store={store}>{children}</Provider>;
}
