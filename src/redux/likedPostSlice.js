import { createSlice } from "@reduxjs/toolkit";

const likedPostSlice = createSlice({
    name: 'liked',
    initialState: {
        likedPosts: [],
    },
    reducers: {
        like(state,action){

        },
        disLike(){

        }
    }
})

export const likedPostActions = likedPostSlice.actions;

export default likedPostSlice;