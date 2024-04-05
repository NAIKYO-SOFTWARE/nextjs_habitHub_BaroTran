'use client';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import ButtonCircle from '@/src/components/BaseUI/ButtonCircle';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <div className={cx('wrapper')}>
            <ButtonCircle>
                <Image
                    src="/calendar_month.png"
                    alt=""
                    width={20}
                    height={30}
                />
            </ButtonCircle>
            <ButtonCircle to="/home">
                <Image src="/checklist.png" alt="" width={20} height={30} />
            </ButtonCircle>
            <ButtonCircle to="/profile">
                <Image src="/person.png" alt="" width={20} height={30} />
            </ButtonCircle>
        </div>
    );
}
