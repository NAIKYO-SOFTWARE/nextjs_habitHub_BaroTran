'use client';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import ButtonCircle from '@/src/component/BaseUI/ButtonCircle';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <div className={cx('wrapper')}>
            <ButtonCircle>
                <img src="/calendar_month.png" alt="" />
            </ButtonCircle>
            <ButtonCircle>
                <img src="/checklist.png" alt="" />
            </ButtonCircle>
            <ButtonCircle>
                <img src="/person.png" alt="" />
            </ButtonCircle>
        </div>
    );
}
