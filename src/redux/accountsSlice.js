import { createSlice } from "@reduxjs/toolkit";
import image1 from '../assets/user.png'

const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        accList: [
            {
                isLogedIn: false,
                userName: 'johnsmithh',
                name: 'John Smith',
                posts: [
                    {
                        image: "https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480",
                        text: 'hi',
                        isLiked: false
                    }
                ],
                pfp: image1,
            },
            {
                isLogedIn: false,
                userName: 'elizeyoh_',
                name: 'Elizabeth Yohanson',
                posts: [
                    {
                        image: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
                        text: 'hello',
                        isLiked: false
                    }
                ],
                pfp: image1,
            },
            {
                isLogedIn: false,
                userName: 'martirosyannn',
                name: 'lil martirosyan',
                posts: [
                    {
                        image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
                        text: 'bl',
                        isLiked: false
                    }
                ],
                pfp: image1,
            },
            {
                isLogedIn: false,
                userName: 'arudeliz',
                name: 'arus elizbaryan',
                posts: [
                    {
                        image: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
                        text: 'gr',
                        isLiked: false
                    },
                    {
                        image: "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
                        isLiked: false
                    }
                ],
                pfp: image1,
            },
            {
                isLogedIn: false,
                userName: 'johnsmith',
                name: 'John Smith',
                posts: [
                    {
                        image: "https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1200&q=88&f=ee2b0e8d2fcaeb2fb7313f07712a2440",
                        text: 'hi',
                        isLiked: false
                    }
                ],
                pfp: image1,
            },
            {
                isLogedIn: false,
                userName: 'johnsmithhh',
                name: 'John Smith',
                posts: [
                    {
                        image: "https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480",
                        text: 'hi',
                        isLiked: false
                    }
                ],
                pfp: image1,
            },
        ]
    },
    reducers: {
        liked(state, action) {
            const user = state.accList.find(x => x.userName === action.payload.username)
            const post = user.posts.find(x => x.image == action.payload.image)
            post.isLiked = true
        },
        disliked(state,action){
            const user = state.accList.find(x => x.userName === action.payload.username)
            const post = user.posts.find(x => x.image == action.payload.image)
            post.isLiked = false
        }
    }
})

export const accountsActions = accountsSlice.actions

export default accountsSlice