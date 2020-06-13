import React, {useState} from 'react';
import {Message} from './Message.js'
import './App.css';

export default function App() {
  let[count,setCount]= useState(1);
  let[isHappy, setHappy]=useState(false)
  return (
    <div className={`box ${isHappy ? "happy": ""}`}> 
    <h1>I am {isHappy ? 'Happy':'Sad'}</h1>
      <Message counter={count}/>
      <br />
      <button onClick={()=>setCount(count + 1)}>Update Counter</button>
      <br />
      <button onClick={()=>setHappy(!isHappy)}>Update Mood</button>
    </div>
  );
}
