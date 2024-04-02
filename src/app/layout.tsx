import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <html lang="en">
                <body className="flex min-h-screen flex-col items-center justify-between p-24 bg-page ">
                    <div className=" bg-gradient-to-r from-purple-100  to-pink-200 w-[300px] h-[550px] rounded-[30px] relative">
                        {children}
                    </div>
                </body>
            </html>
        </StoreProvider>
    );
}
