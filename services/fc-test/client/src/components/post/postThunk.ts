import {createAsyncThunk} from "@reduxjs/toolkit";
import type {IPost} from "./Post.tsx";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (): Promise<IPost> => {
    const response = await fetch('http://' + import.meta.env.VITE_SERVER_URL + '/posts');

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
});