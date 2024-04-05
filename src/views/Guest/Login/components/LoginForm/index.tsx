'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/src/components/BaseUI/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/src/lib/hooks';
import { setLogin } from '@/src/lib/features/login/loginSlice';

interface FormData {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const dispatch = useAppDispatch();
    const router = useRouter();
    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(setLogin(data));
        if (data) {
            router.push('/contract');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-[20px]">
                <input
                    className="w-[100%] h-[30px] rounded-[5px]"
                    type="text"
                    placeholder="Email"
                    {...register('email', {
                        required: 'Email cannot be empty',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email',
                        },
                    })}
                />
                {errors.email && (
                    <div className=" text-red-500">{errors.email.message}</div>
                )}
            </div>

            <div className="px-[20px]">
                <input
                    className="w-[100%] h-[30px] rounded-[5px]"
                    type="password"
                    placeholder="Password"
                    {...register('password', {
                        required: 'Invalid password',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters',
                        },
                    })}
                />
                {errors.password && (
                    <div className=" text-red-500">
                        {errors.password.message}
                    </div>
                )}
            </div>

            <div className="pt-[40px]">
                <Button type="submit" primary>
                    Login
                </Button>
            </div>
        </form>
    );
};

export default LoginForm;
