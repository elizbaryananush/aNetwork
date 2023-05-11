import { createSlice } from "@reduxjs/toolkit";
import accountsSlice from "./accountsSlice";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postList : [],
    },
    reducers: {
        addNewPost(state, action) {
            state.postList.push({
                image: action.image,
                context: action.context
            })
        },
        deletePost() {

        },
    }

})

export const postsActions = postsSlice.actions;

export default postsSlice