import React from 'react'
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/usercontext';


export default function LoginPage() {

  // username and pwd states(updated via text i/p) are used so to pass input to API side for authentication process
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext)


  async function login(e) {

    e.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include'
    });

    // what value will response recieve?
    if (response.ok) {
      
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      })
        
      
    } else {
      alert('Wrong credentials');
    } 
  }


  if (redirect) {
    return <Navigate to={'/'} />
  }
  

  return (
    <form className='login' onSubmit={login}>
      <h1>Login</h1>

      <input type="text"
             placeholder="Username"
             value={username}
             onChange={e => setUsername(e.target.value)}/>

      <input type="password"
             placeholder="Password"
             value={password}
             onChange={e => setPassword(e.target.value)}/>

      <button>Login</button>
    </form>
  )
}
