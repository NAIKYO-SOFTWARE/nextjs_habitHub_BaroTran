'use client';
import Image from 'next/image';
import ButtonCircle from '@/src/components/BaseUI/ButtonCircle';
import Footer from '@/src/components/Feature/Layouts/Footer';
import Underlined from '@/src/components/Underlined';
import LoginForm from './components/LoginForm';
import { useAppSelector } from '@/src/lib/hooks';

interface LoginFormValues {
    email: string;
}
interface RootState {
    login: {
        email: string;
        password: string;
    };
}
function Login() {
    const user = useAppSelector((state: RootState) => state.login);
    return (
        <div className=" text-center">
            <h2 className="text-pink-600 pt-[50px] text-[22px] font-bold">
                Log in to HabitHUB
            </h2>
            <p className=" text-[12px]">
                Welcome back! Sign in using your social account or email to
                continue us
            </p>
            <div className="flex justify-evenly pt-[30px]">
                <ButtonCircle primary>
                    <Image
                        src="/Facebook-f_Logo.png"
                        alt=""
                        width={125}
                        height={24}
                    />
                </ButtonCircle>
                <ButtonCircle primary>
                    <Image
                        src="/Google_Pay-Logo.png"
                        alt=""
                        width={125}
                        height={24}
                    />
                </ButtonCircle>
                <ButtonCircle primary>
                    <Image
                        src="/Apple_Inc.-Logo.png"
                        alt=""
                        width={125}
                        height={24}
                    />
                </ButtonCircle>
            </div>
            <div>
                <Underlined />
            </div>
            <div>
                <LoginForm />
            </div>
            <div>
                <p>{user.email}</p>
                <p>{user.password}</p>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Login;
