import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/usercontext'

export default function Header() {

  const {userInfo, setUserInfo} = useContext(UserContext)

  // upon page refresh (all pages containing Header:)
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {  // userInfo stores username and ID (console.log for test)
        setUserInfo(userInfo)
      })
    })
  }, [])



  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }



  const username = userInfo?.username


  return (
    
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {/* if username state is not empty */}
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}> Logout ({username})</a>
          </>
        )}
        {/* if username state is empty */}
        {!username && (
          <>
          {/* Link to "/addresss" takes to homepageaddress(localhost:3000)/address on click */}
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}



