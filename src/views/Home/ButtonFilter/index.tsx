'use client';
import { useState } from 'react';

function ButtonFilter() {
    const btnFilter = [
        { id: 1, text: 'All' },
        { id: 2, text: 'Daily Routine' },
        { id: 3, text: 'Study Routine' },
    ];
    const [idActive, setIdActive] = useState(1);
    const handleButtonClick = (id: number) => {
        setIdActive(id);
    };
    return (
        <div className=" flex justify-center">
            {btnFilter.map((btn, index) => {
                let classes = btn.id === idActive ? '#f1c1f8' : 'transparent';
                return (
                    <button
                        style={{
                            border: '1px solid #d6d5d6',
                            backgroundColor: classes,
                        }}
                        className={`text-[12px] p-[5px] min-w-[50px] rounded-[10px] mx-[5px] `}
                        key={index}
                        onClick={() => handleButtonClick(btn.id)}
                    >
                        {btn.text}
                    </button>
                );
            })}
        </div>
    );
}

export default ButtonFilter;
