import React, { useState } from 'react'

export default function RegisterPage() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  
  async function register(e) {
      e.preventDefault();
      
      // try catch wont work here
    
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type':'application/json'},
      })

      // response.status is by default sent back to client from server rather than passing it
      //here userDoc is also passed from backend meaning the user's(registered/created) details may be used here
      if(response.status === 200){
        alert('Registration successful')
      }
      else {
        alert('Registration failed')
      }

  }



  return (

    <form className='register' onSubmit={register}>

      <h1>Register</h1>

        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>

        <button>Register</button>
    </form>
  )
}
