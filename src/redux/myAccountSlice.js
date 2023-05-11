import { createSlice } from "@reduxjs/toolkit";
import PFP from '../assets/user.png'

const myAccountslice = createSlice({
    name: 'my',
    initialState: {
        account: {
            isLogedIn: false,
            userName: 'anush',
            name: 'anush',
            posts: [],
            pfp: PFP,
            password: 'anush123'
        }
    },
    reducers: {
        signup(state, action) {
            state.account.userName = action.payload.userName;
            state.account.name = action.payload.name;
            state.account.password = action.payload.password;
            state.account.isLogedIn = true
        },
        signout(state) {
            state.account.userName = '';
            state.account.name = '';
            state.account.password = '';
            state.account.isLogedIn = false;
            state.account.posts = []
        },
        addNewPost(state, action) {
            state.account.posts.push({
                image: action.payload.image,
                text: action.payload.text
            })
        },
        changepfp(state, action) {
            state.account.pfp = action.payload.pfp
        }
    }
})

export const myAccountactions = myAccountslice.actions;

export default myAccountslice