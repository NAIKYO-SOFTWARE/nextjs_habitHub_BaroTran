'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function TransitionPage() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/home');
        }, 1000);
    }, []);
    return (
        <div className=" flex justify-center items-center h-[100%]">
            <Image src="/Designsem1.png" alt="" width={250} height={250} />
        </div>
    );
}
