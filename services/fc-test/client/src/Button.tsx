import type {FC, ReactNode} from "react";

interface IButtonProps {
    onClick: () => void,
    children: ReactNode
}

const Button: FC<IButtonProps> = ({children, onClick}) => {

    return <button
        className={"border-1 rounded-lg bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-300 active:text-indigo-500 text-indigo-100 p-2 "}
        onClick={onClick}>
        {children}
    </button>
}

export default Button;