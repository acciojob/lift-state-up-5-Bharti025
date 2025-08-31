import React from 'react'

const Child = ({setisLoggedIn}) => {
function checkLogin(){
setisLoggedIn(true);
}

  return (
    <div>
        <label htmlFor="name">UserName</label>
      <input type="text" id="name"/>
         <label htmlFor="password">Password</label>
      <input type="password" id="password"/>
      <button type="submit" onClick={checkLogin}>Login</button>
    </div>
  )
}

export default Child
