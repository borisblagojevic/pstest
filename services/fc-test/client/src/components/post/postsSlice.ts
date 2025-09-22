import {createSlice} from "@reduxjs/toolkit";
import {fetchPosts} from "./postThunk.ts";
import type {IPost} from './Post.tsx';

interface IPostsSlice {
    posts: Array<IPost>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

const initialState: IPostsSlice= {
    posts: [],
    status: 'idle',
    error: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    // 4. Handle async actions from the thunk
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                //@ts-ignore
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            });
    },
});

export default postsSlice.reducer;
