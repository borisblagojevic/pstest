import Post from "./Post.tsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "./postThunk.ts";
import {useEffect} from "react";
import type {AppDispatch, RootState} from "../../store/store.ts";

const Posts = () =>
{
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: RootState) => state.posts.posts);
    const postStatus = useSelector((state: RootState) => state.posts.status);
    const error = useSelector((state: RootState) => state.posts.error);
    const buttonSelected = useSelector((state: RootState) => state.button.value);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;

    if (postStatus === 'loading')
    {
        content = <div>Loading...</div>;
    }
    else if (postStatus === 'succeeded')
    {
        if(buttonSelected === 'favorites')
            content = posts.filter((post) => post.isFavorite === true);
        else
            content = posts

        content = content.map((post) => <Post id={post.id} title={post.title} description={post.description} isFavorite={post.isFavorite} key={`post-${post.title}-${post.id}`} />);
    }
    else if (postStatus === 'failed')
    {
        content = <div>Error: {error}</div>;
    }

    return content;
}

export default Posts;