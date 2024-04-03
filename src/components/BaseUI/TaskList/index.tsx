'use client';

import { changeChecked } from '@/src/lib/features/WorkList/WorkListSlice';
import { useAppDispatch } from '@/src/lib/hooks';

interface IProps {
    id: number;
    title: string;
    icon: string;
    bgColor: string;
    radio?: string;
    isChecked?: boolean;
}

function TaskList({ id, title, icon, bgColor, radio, isChecked }: IProps) {
    const dispatch = useAppDispatch();
    const handleChecked = () => {
        dispatch(changeChecked({ isChecked: !isChecked, id }));
    };
    return (
        <div
            className="py-2 px-6 rounded-lg size-full relative"
            style={{ backgroundColor: bgColor }}
        >
            <span>{icon}</span>
            <span className=" text-sm">{title}</span>
            {radio && (
                <div>
                    <input
                        className=" absolute right-0 mr-5 bottom-3 float-right mt-1"
                        type={radio}
                        checked={isChecked}
                        onClick={handleChecked}
                    />
                    {isChecked && (
                        <div className=" absolute top-1/2 w-56 border border-solid border-gray-800"></div>
                    )}
                </div>
            )}
        </div>
    );
}

export default TaskList;
