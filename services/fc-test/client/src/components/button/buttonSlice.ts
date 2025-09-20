import { createSlice } from '@reduxjs/toolkit'

interface ButtonState {
    value: 'all' | 'favorites'
}

const initialState: ButtonState = {
    value: 'all',
};

const butonSlice = createSlice({
    name: 'button',
    initialState,
    reducers: {
        setAll: (state) => {
            state.value = 'all';
        },
        setFavorites: (state) => {
            state.value = 'favorites';
        }
    }
});

export const {setAll, setFavorites} = butonSlice.actions;

export default butonSlice.reducer;