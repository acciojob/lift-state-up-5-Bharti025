import React,{useState} from "react";
import Child from "./Child.jsx"
import './../styles/App.css';

const App = () => {
  const [isLoggedIn,setisLoggedIn]=useState(false);
  
  return (
    <div>
      <h1>Parent Component</h1>
   {!isLoggedIn ? <Child setisLoggedIn={setisLoggedIn}/> : <p>You are logged in!</p>}
    </div>
  )
}

export default App
