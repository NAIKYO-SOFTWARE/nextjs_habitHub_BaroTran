interface IProp {
    text: string;
    icon: string;
}

function ListContract({ text, icon }: IProp) {
    return (
        <li className=" p-[5px]">
            <span>{icon}</span>
            <span>{text}</span>
        </li>
    );
}

export default ListContract;
