import React from 'react';
import logo from './logo.svg';
import './App.css';
import NetFlix from './NetFlix.jpg';

let C1 = () => {return (
  <h1>WellCome to NetFlix</h1>
)}

let C2 = () => {return (<><img src= "NetFlix.jpg" /> <h2>React Js</h2></>)}

let C3 = () => {return (<p className='Header'> Home | Contact</p>)}

let C4 = () => {return ( <p>@ Copyright footer</p>)}

let user:any ={username:'Shivv',pwd:'nimda'}
let C5 =() => {return (<p>UserName:{user.UserName} | Password : {user.pwd}</p>)}

let C6 = () => {return (
  <div>
    <input type='text' value={user.UserName} />
    <br/>
    <input type='password' value={user.pwd}/>
    <br/>
    <button>Login</button>
  </div>
)}
function App() {
  return (
    <>
    <C1/>
    <hr/>
    <C2/>
    <hr/>
    <C3/>
    <hr/>
    
    <C6/>

    <hr/>
    <C4/>
    </>
         
  )
}

export default App;
