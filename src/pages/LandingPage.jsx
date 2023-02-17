
import React from 'react';
import './LandingPage.css'

import { useNavigate } from 'react-router-dom';
import Login from '../components/Modal/Login';
import { useState } from 'react';
import Register from '../components/Modal/Register';

function LandingPage(props) {
const history=useNavigate()
const [modalIsOpen, setModalisOpen] = useState(false);

  function login(){
    setModalisOpen(true);
  }
  function register(){
    setModalisOpen(true);
  }


  return (
    <div>
      <h1>Hi selva please work on the landing page,thank you</h1>
      <button className='login-btn' onClick={login}>Login</button> 
      {modalIsOpen && <Login onLogin={login}/>} 
      <button className='Register-btn' onClick={register}>Register</button>
      {modalIsOpen && <Register onRegister={register}/>}
    </div>
  )
}

export default LandingPage;
