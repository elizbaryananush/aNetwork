import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";
import accountsSlice from "./accountsSlice";
import myAccountslice from "./myAccountSlice";
import likedPostSlice from "./likedPostSlice";

const store = configureStore({
    reducer: {
        posts : postsSlice.reducer,
        accounts : accountsSlice.reducer,
        my: myAccountslice.reducer,
        liked: likedPostSlice.reducer
    }
})

export default store