import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { myAccountactions } from '../redux/myAccountSlice'

function Navbar() {
  const user = useSelector(state => state.my.account)
  const [style, setStyle] = useState('block')
  const dispatch = useDispatch()
  

  const signout = () => {
    setStyle('none')
    dispatch(myAccountactions.signout())
  }

  const signed = useSelector(state => state.my.account.isLogedIn)
  
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">aNetwork</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={user.isLogedIn ? { display: 'flex' } : { display: 'none' }}>
            <NavLink
              to={'/'}
              className={({ isActive }) => isActive ? "nav-link active1" : "nav-link"} href="#">Main</NavLink>
            <NavLink
              to={'/likes'}
              className={({ isActive }) => isActive ? "nav-link active1" : "nav-link"} href="#">Liked</NavLink>
            <NavLink
              to={'/new'}
              className={({ isActive }) => isActive ? "nav-link active1" : "nav-link"} href="#">Add Post</NavLink>
          <NavLink
              to={'/my'}
              className={({ isActive }) => isActive ? "nav-link active1" : "nav-link"} href="#">My Profile</NavLink>
          </div>
        </div>
          {!user.isLogedIn ? <Link className='Link' to={'/signup'}><button className='btn' style={{display:style}} onClick={()=>setStyle('none')}>sign up</button></Link> : <Link className='Link' to={'/signup'}><button className='btn' style={signed === true ? {display:'flex'} : {display:'none'}} onClick={signout}>sign out</button></Link>}
        
      </div>
    </nav>
  )
}

export default Navbar
