import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
    },
    reducers: {
        addMovies: (state, action) => {
            state.books = action.payload;
        },
    },
});

export const { addBooks } = bookSlice.actions;
export const getAllMovies = (state) => state.books.books;
export default bookSlice.reducer;
