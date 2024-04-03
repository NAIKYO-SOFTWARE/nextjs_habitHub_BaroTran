'use client';

import TaskList from '@/src/components/BaseUI/TaskList';
import { addWorkList } from '@/src/lib/features/WorkList/WorkListSlice';
import { useAppDispatch } from '@/src/lib/hooks';

interface IProps {
    id: number;
    title: string;
    icon: string;
    bgColor: string;
}

function WorkList({ id, title, icon, bgColor }: IProps) {
    const dispatch = useAppDispatch();
    const handleOnClick = () => {
        const data = {
            id: id,
            title: title,
            icon: icon,
            bgColor: bgColor,
            isChecked: false,
        };
        dispatch(addWorkList(data));
    };
    return (
        <div className="flex">
            <TaskList id={id} title={title} icon={icon} bgColor={bgColor} />
            <span className="flex bg-[#f7f6f3] rounded-full mr-4 shadow-sm">
                <button onClick={handleOnClick} className="w-10">
                    +
                </button>
            </span>
        </div>
    );
}

export default WorkList;
