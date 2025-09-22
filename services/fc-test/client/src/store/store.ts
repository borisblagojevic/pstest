import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from '../components/button/buttonSlice.ts';
import postReducer from '../components/post/postsSlice.ts'
import {searchSlice} from "../components/search/searchSlice.ts";

export const store = configureStore({
    reducer: {
        button: buttonReducer,
        posts: postReducer,
        // @ts-ignore
        searches: searchSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch