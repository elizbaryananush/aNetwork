import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { accountsActions } from '../redux/accountsSlice';

function LikedPosts() {
    const [likes, setLikes] = useState({
        clicked: false
    })
    const dispatch = useDispatch()
    const acc = useSelector(state => state.accounts.accList)
    console.log(acc);
    let like = []
    let acc2 = acc.filter(x => x.posts.find(x => x.isLiked === true))
    console.log(acc2);
    acc.map((item, index) => {
        let map = item.posts.find(x => x.isLiked == true)
        if (map) {
            like.push(map)
        }
    })
    let post;
    const account = acc.find(x => x.posts.find(x => x.image === likes.image))

    account ? post = account.posts.find(x => x.image === likes.image) : null

    console.log(post);

    const likedpost = useSelector(state => state.liked.likedPosts)

    return (
        <div className='likes'>
            <h1>liked posts</h1>
            <div className='likedpost'>
               
                    {
                        acc2.map(item => {
                            const post = item.posts.find(x => x.isLiked === true)
                            return <div className='wrap'> <img onClick={() => setLikes({
                                clicked: true,
                                image: post.image
                            })} src={post.image} />
</div>
                        })
                    }
                
            </div>
            <div style={likes.clicked === true ? { display: "block" } : { display: 'none' }} className='post3'>
                <div className='box'>
                    {
                        account ? <div className="post">

                            <svg onClick={() => setLikes({
                                clicked: false
                            })} className='cross' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="30" height="30"><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" /></svg>
                            <h6>{account.userName}</h6>
                            <img src={post.image} />
                            <div className="like">
                                <svg
                                    onClick={() => dispatch(accountsActions.disliked({
                                        username: account.userName,
                                        image: post.image
                                    }))}
                                    style={post.isLiked === true ? { display: 'flex' } : { display: 'none' }}
                                    xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="30" height="30"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" /></svg>
                                <svg
                                    onClick={() => dispatch(accountsActions.liked({
                                        username: account.userName,
                                        image: post.image
                                    }))}
                                    style={post.isLiked === true ? { display: 'none' } : { display: 'flex' }}
                                    xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="30" height="30"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" /></svg>
                            </div>
                            <div className="text">
                                <Link to={`/:${account.userName}`}>
                                    <p>{account.userName}</p>
                                </Link>
                                <h6>{post.text}</h6>
                            </div>
                        </div> : <h1>hello</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default LikedPosts
