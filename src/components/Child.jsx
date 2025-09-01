import React, { useState } from 'react'

const Child = ({setisLoggedIn}) => {
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
function checkLogin(e){
  e.preventDefault();
  if(username && password){
    alert("logged in")
setisLoggedIn(true);
  }
  else{
    alert("Please fill all the information");
  }
}

  return (
    <form onSubmit={checkLogin}>
        <label htmlFor="name">UserName</label>
      <input type="text" id="name" onChange={(e)=>setUserName(e.target.value)} />
         <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit" >Login</button>
    </form>
  )
}

export default Child
