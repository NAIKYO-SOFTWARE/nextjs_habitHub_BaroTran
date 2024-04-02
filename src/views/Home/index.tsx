import Image from 'next/image';
import DayBox from './DayBox';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Footer from '@/src/component/Feature/Layouts/Footer';
import ButtonCircle from '@/src/component/BaseUI/ButtonCircle';
import ButtonFilter from './ButtonFilter';

const cx = classNames.bind(styles);
function Home() {
    const handleAddTask = () => {};
    return (
        <div className={cx('wrapper')}>
            <div>
                <DayBox />
            </div>
            <div className="py-[10px]">
                <ButtonFilter />
            </div>
            <div className={cx('content')}>
                <Image src="/home.png" alt="" width={200} height={200} />
            </div>
            <div className=" absolute right-[20px] bottom-[60px]">
                <ButtonCircle primary onClick={handleAddTask}>
                    +
                </ButtonCircle>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
