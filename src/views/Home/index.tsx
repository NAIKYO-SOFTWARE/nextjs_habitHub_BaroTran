'use client';
import Image from 'next/image';
import DayBox from './DayBox';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Footer from '@/src/components/Feature/Layouts/Footer';
import ButtonCircle from '@/src/components/BaseUI/ButtonCircle';
import ButtonFilter from './ButtonFilter';
import { useAppSelector } from '@/src/lib/hooks';
import TaskList from '@/src/components/BaseUI/TaskList';

const cx = classNames.bind(styles);

function Home() {
    const listTask = useAppSelector((state) => state.workList.data);

    return (
        <div className={cx('wrapper')}>
            <div>
                <DayBox />
            </div>
            <div className="py-[10px]">
                <ButtonFilter />
            </div>
            {listTask.length === 0 ? (
                <div className={cx('content')}>
                    <Image src="/home.png" alt="" width={200} height={200} />
                </div>
            ) : (
                <div className={cx('list-task')}>
                    {listTask.map((task, index) => {
                        return (
                            <div className=" py-3" key={index}>
                                <TaskList
                                    id={task.id}
                                    title={task.title}
                                    icon={task.icon}
                                    bgColor={task.bgColor}
                                    isChecked={task.isChecked}
                                    radio="radio"
                                />
                            </div>
                        );
                    })}
                </div>
            )}
            <div className=" absolute right-[20px] bottom-[60px] w-10 h-10 bg-[#f5f5f5] rounded-full text-center shadow-inner">
                <ButtonCircle to="/suggestions">+</ButtonCircle>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
