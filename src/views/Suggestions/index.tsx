'use client';
import Topic from './Topic';
import WorkList from './WorkList';
import classNames from 'classnames/bind';
import styles from './Suggestions.module.scss';
import Footer from '@/src/components/Feature/Layouts/Footer';
import Button from '@/src/components/BaseUI/Button';
import { useAppSelector } from '@/src/lib/hooks';

const cx = classNames.bind(styles);

const listData = [
    {
        id: 1,
        title: 'Learn and study more',
        desc: 'Stay hungry for knowledge',
        icon: '🧠',
        workList: [
            {
                id: 10,
                title: 'Read',
                icon: '📕',
                bg: '#FFEE93',
            },
            {
                id: 11,
                title: 'Study',
                icon: '✏️',
                bg: '#ADF7B6',
            },
        ],
    },
    {
        id: 2,
        title: 'Exercise',
        desc: 'Become your best version',
        icon: '🏋️‍♂️',
        workList: [
            {
                id: 21,
                title: 'Running',
                icon: '⛹️‍♀️',
                bg: '#bde0fe',
            },
            {
                id: 22,
                title: 'Cycling',
                icon: '🚴',
                bg: '#FFC09F',
            },
        ],
    },
    {
        id: 3,
        title: 'Clean and Organize',
        desc: 'Get you life togheter',
        icon: '🧹',
        workList: [
            {
                id: 31,
                title: 'Mop the house',
                icon: '🪣',
                bg: '#FCF5C7',
            },
            {
                id: 32,
                title: 'Clean the bathroom',
                icon: '🚽',
                bg: '#f3c4fb',
            },
        ],
    },
];

function Suggestions() {
    return (
        <div>
            <h1 className=" text-center py-8 font-extrabold">Suggestions</h1>
            <div className={cx('list')}>
                {listData.map((data, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <Topic
                                    title={data.title}
                                    icon={data.icon}
                                    desc={data.desc}
                                />
                            </div>
                            <div className=" pl-5">
                                {data.workList.map((list, index) => {
                                    return (
                                        <div className="py-3" key={index}>
                                            <WorkList
                                                id={list.id}
                                                title={list.title}
                                                icon={list.icon}
                                                bgColor={list.bg}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className=" absolute bottom-[50px] right-[70px]">
                <Button primary>Add more</Button>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Suggestions;
