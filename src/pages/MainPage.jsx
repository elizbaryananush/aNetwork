import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import image from '../assets/user.png'
import { Link } from 'react-router-dom'
import { accountsActions } from '../redux/accountsSlice'


function MainPage() {
  const post = useSelector((state => state.accounts.accList))
  const [icon, setIcon] = useState(true)
  const dispatch = useDispatch()

  const signed = useSelector(state => state.my.account.isLogedIn)

  console.log(signed);

  let image = []
  post.map((item) => {
    image.push(item.posts[0])
  })

  console.log(post);

  return (
   <div className='Main'>
      {

        signed === true ? (
        image.map((item, index) => {
          return <div className='post'>
            <Link to={`/:${post[index].userName}`}>
              <h6 key={index}>{post[index].userName}</h6>
            </Link>
            <img src={item.image} />
            <div className="like">
              <svg
                onClick={() => dispatch(accountsActions.disliked({
                  username: post[index].userName,
                  image: item.image
                }))}
                style={item.isLiked ? { display: 'flex' } : { display: 'none' }}
                xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="35" height="35"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" /></svg>
              <svg
                onClick={() => dispatch(accountsActions.liked({
                  username: post[index].userName,
                  image: item.image
                }))}
                style={item.isLiked ? { display: 'none' } : { display: 'flex' }}
                xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="35" height="35"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" /></svg>
            </div>
            <div className='text'>
              <Link to={`/:${post[index].userName}`}>
                <p>{post[index].userName} </p>
              </Link>
              <h6>{item.text}</h6>
            </div>
          </div>
        })) : <h1 className='not'>You don't have an account please sign up</h1>
      }
    </div>
  )
}

export default MainPage
