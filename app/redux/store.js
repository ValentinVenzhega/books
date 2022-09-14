import { configureStore } from "@reduxjs/toolkit";

// import moviesReducer from "./movies/movieSlice";
// import cartReducer from "./cart/cartSlice";
import favoritesReducer from "./favorites/favoriteSlice";

export const store = configureStore({
    reducer: {
        // movies: moviesReducer,
        // cart: cartReducer,
        favorites: favoritesReducer,
    },
});
