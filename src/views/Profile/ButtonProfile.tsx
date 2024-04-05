interface IProps {
    title: string;
}
function ButtonProfile({ title }: IProps) {
    return (
        <div className="flex bg-white p-3 m-5 rounded-lg">
            <button className="w-full px-5">
                <span className=" float-start">{title}</span>
                <span className=" float-right">👉</span>
            </button>
        </div>
    );
}

export default ButtonProfile;
