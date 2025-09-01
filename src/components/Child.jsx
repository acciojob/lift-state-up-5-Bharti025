import React from 'react'

const Child = ({setisLoggedIn}) => {
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
function checkLogin(){
  if(username && password){
setisLoggedIn(true);
  }
  else{
    alert("Please fill all the information");
  }
}

  return (
    <div>
        <label htmlFor="name">UserName</label>
      <input type="text" id="name" onChange={(e)=>setUserName(e.target.value)} />
         <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit" onClick={checkLogin}>Login</button>
    </div>
  )
}

export default Child
