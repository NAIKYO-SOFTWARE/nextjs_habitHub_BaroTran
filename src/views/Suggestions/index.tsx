import Topic from './Topic';

const listData = [
    {
        id: 1,
        title: 'Learn and study more',
        desc: 'Stay hungry for knowledge',
        icon: '🧠',
        activeList: [
            {
                id: 10,
                title: 'Read',
                bg: '#FFEE93',
            },
            {
                id: 11,
                title: 'Study',
                bg: '#ADF7B6',
            },
        ],
    },
    {
        id: 2,
        title: 'Exercise',
        desc: 'Become your best version',
        icon: '🏋️‍♂️',
        activeList: [
            {
                id: 21,
                title: 'Running',
                bg: '#bde0fe',
            },
            {
                id: 22,
                title: 'Cycling',
                bg: '#FFC09F',
            },
        ],
    },
    {
        id: 3,
        title: 'Clean and Organize',
        desc: 'Get you life togheter',
        icon: '🧹',
        activeList: [
            {
                id: 31,
                title: 'Mop the house',
                bg: '#FCF5C7',
            },
            {
                id: 32,
                title: 'Clean the bathroom',
                bg: '#f3c4fb',
            },
        ],
    },
];

function Suggestions() {
    return (
        <div>
            <h1 className=" text-center py-8 font-extrabold">Suggestions</h1>
            <div>
                {listData.map((data, index) => {
                    return (
                        <div key={index}>
                            <Topic
                                title={data.title}
                                icon={data.icon}
                                desc={data.desc}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Suggestions;
