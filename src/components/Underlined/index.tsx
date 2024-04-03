import classNames from 'classnames/bind';
import styles from './Underlined.module.scss';

const cx = classNames.bind(styles);

function Underlined() {
    return (
        <div className={cx('line')}>
            <p></p>
            <span>OR</span>
            <p></p>
        </div>
    );
}

export default Underlined;
