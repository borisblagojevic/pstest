import type {FC} from "react";
import Button from "../../Button.tsx";

interface IPostProps {
    id: string,
    title: string,
    description: string,
    isFavorite: boolean,
}

const Post: FC<IPostProps> = ({id, title, description, isFavorite}) =>
{
    return <div className={"border-2 rounded-lg p-3 border-indigo-500 text-indigo-500 w-2/4"} key={`post-${id}-${title}`}>
        <div className={"flex flex-row justify-between items-center pb-4"}>
            <h3 className={"font-bold"}>{title}</h3>

            <Button onClick={() => {}}>{isFavorite ? "★" : "☆"}</Button>
        </div>

        <p>{description}</p>

    </div>
}

export default Post;