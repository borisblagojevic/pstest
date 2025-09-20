import Posts from "../components/post/Posts.tsx";
import Button from "../components/button/Button.tsx";

import {useDispatch, useSelector} from "react-redux";
import {setAll, setFavorites} from '../components/button/buttonSlice.ts'
import type {RootState} from "../store/store.ts";

const Home = () => {
    const buttonSelected = useSelector((state: RootState) => state.button.value);
    const dispatch = useDispatch();

    return <main className={"bg-indigo-100 h-screen flex flex-col justify-start items-center"}>
        <section className={"h-20 flex flex-col justify-center items-center"}>
            <h1 className={"text-center text-indigo-500"}>My posts</h1>
        </section>

        <section
            className={"flex flex-row justify-center items-center gap-2 py-4 border-t-2 border-indigo-300 w-1/2"}>
            <Button onClick={() => dispatch(setAll())}>All posts</Button>
            <Button onClick={() => dispatch(setFavorites())}>Favorites</Button>
            {/*    Search*/}
        </section>

        <section className={"flex flex-col justify-center items-center gap-1 w-full pt-12"}>
            {buttonSelected}
            <Posts></Posts>
        </section>
    </main>
}

export default Home;