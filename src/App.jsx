import React, { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import MainPage from './pages/MainPage'
import NewPostPage from './pages/NewPostPage'
import SignUpPage from './pages/SignUpPage'
import MyAccount from './pages/MyAccount'
import EditAccount from './pages/EditAccount'
import OtherAccount from './pages/OtherAccount'
import LikedPosts from './pages/LikedPosts'
import Footer from './pages/Footer.jsx'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <div className='wrapper'> */}
          <Routes>
            <Route path='/' Component={MainPage} />
            <Route path='/new' Component={NewPostPage} />
            <Route path='/signup' Component={SignUpPage} />
            <Route path='/my' Component={MyAccount} />
            <Route path='/editacc' Component={EditAccount} />
            <Route path='/:name' Component={OtherAccount} />
            <Route path='/likes' Component={LikedPosts} />
          </Routes>
          <Footer />
        {/* </div> */}
      </Router>
    </div>
  )
}

export default App
