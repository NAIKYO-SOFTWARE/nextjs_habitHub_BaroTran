import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps {
    to?: string;
    children: React.ReactNode;
    primary?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

function Button({ to, children, primary, type, onClick }: ButtonProps) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    const classes = cx('wrapper', { primary });
    if (to) {
        return (
            <Link className={classes} href={to}>
                <span>{children}</span>
            </Link>
        );
    }
    return (
        <button type={type} className={classes} onClick={handleClick}>
            <span>{children}</span>
        </button>
    );
}

export default Button;

//style={{backgroundColor: color}
