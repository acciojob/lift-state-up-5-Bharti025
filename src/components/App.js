import React,{useState} from "react";
import Child from "./Child.jsx"
import './../styles/App.css';

const App = () => {
  const [isLoggedIn,setisLoggedIn]=useState(false);
  console.log(isLoggedIn);
  return (
    <div>
      <h1>Parent Component</h1>
    <Child setisLoggedIn={setisLoggedIn}/>
    </div>
  )
}

export default App
