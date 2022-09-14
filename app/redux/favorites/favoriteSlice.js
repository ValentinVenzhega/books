import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        deleteFavorite: (state, action) => {
            state.favorites = state.favorites.filter((book) => book.id !== action.payload);
        },
    },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
