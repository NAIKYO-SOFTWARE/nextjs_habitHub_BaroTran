interface IProps {
    title: string;
    desc: string;
    icon: string;
}
function Topic({ title, desc, icon }: IProps) {
    return (
        <div>
            <div className="flex px-2">
                <span className="">{icon}</span>
                <span className=" px-3 font-semibold">{title}</span>
                <button className=" text-xs ms-auto">See all </button>
            </div>
            <p className="text-xs px-4">{desc}</p>
        </div>
    );
}

export default Topic;
