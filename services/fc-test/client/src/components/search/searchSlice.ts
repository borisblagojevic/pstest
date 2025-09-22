import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface ISearchSlice {
    search: string
}

const initialState: ISearchSlice = {
    search: '',
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<ISearchSlice>) => {
            // @ts-ignore
            state.search = action.payload;
        },
        clearSearch: (state) => {
            state.search = '';
        }
    }
})
