import React,{useState} from "react";
import Child from "./Child.jsx"
import './../styles/App.css';

const App = () => {
  const [isLoggedIn,setisLoggedIn]=useState(false);
  console.log(isLoggedIn);
  return (
    <div>
    <Child setisLoggedIn={setisLoggedIn}/>
    </div>
  )
}

export default App
