import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorComponent from './StyleBinding';
import { Toast } from './UsingClass';
import Movie from './Movie';
import Kanthara from './Kanthara.jpg';
import User from './User';
import Human from './Human.png';
import Jum from './Jum.jpg';
import { Login, OkToast, ErrorToast } from './LoginWithStates';
import { WithHttp } from './simpleHttp';
import {Navigate, Routes, Route, Router, BrowserRouter, NavLink,useLocation,useParams} from 'react-router-dom'


let C1 =()=> {return (<h2>A Sub-HEading created in component C1</h2>)}

let user:any ={username:'admin',pwd:'nimda'}
let C2 =() => {return (<p>UserName:{user.UserName} | Password : {user.pwd}</p>)}

let C3 =()=> {return (<img src={logo}/>)}

let C4 = () => {return (
  <div>
    <input type='text' value={user.UserName} />
    <br/>
    <input type='password' value={user.pwd}/>
    <br/>
    <button>Login</button>
  </div>
)}

//Since the function returns html, hence it can be accessed as <App/> inside index.tsx
function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <NavLink to='/login'>Login</NavLink>
        <span> | </span>
        <NavLink to='/movie'>Movies</NavLink>
        <span> | </span>
        <NavLink to='/http'>Web Api Communication</NavLink>
        <span> | </span>
      </div>

      { /* To add configs use the <Routes></Routes> */}
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/movie' element={<><Movie movieName ='Kanthara' rating='5' dp='Kanthara.jpg' />
                                        <Movie movieName ='Jumanji - Part 1' rating='2.4' dp='Jum.jpg' />
                                        <Movie movieName ='777-Charlie' rating='5' dp='logo192.png' /> </>} />
        <Route path='/http' element={<WithHttp/>} />

        </Routes>
        </BrowserRouter>
    </div>
   
  )
}


export default App; 
