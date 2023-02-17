import React from "react";
import "./LandingPage.css";

import { useNavigate } from "react-router-dom";
import Login from "../components/Modal/Login";
import { useState } from "react";
import Register from "../components/Modal/Register";
import Backdrop from "../components/Modal/Backdrop";
import React,{ useState } from 'react';
import './LandingPage.css'


import { useNavigate } from 'react-router-dom';
import Login from '../components/Modal/Login';

import Register from '../components/Modal/Register';

function LandingPage(props) {
  const navigate = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegistermodalOpen, setRegisterModalOpen] = useState(false);
  function login() {
    setLoginModalOpen(true);
  }
  function closelogin() {
    setLoginModalOpen(false);
  }
  function register() {
    setRegisterModalOpen(true);
  }
  function closeregister() {
    setRegisterModalOpen(false);
  }

  return (
    <div>
      <h1>Hi selva please work on the landing page,thank you</h1>
      <button className="login-btn" onClick={login} >
        Login
      </button>
      <button className="Register-btn" onClick={register} >
        Register
      </button>
      {isLoginModalOpen &&  <Backdrop onClose={closelogin}/>}
      {isLoginModalOpen && <Login onLogin={login}/>}
      
      {isRegistermodalOpen && (
        <>
        <Register onClick={register}/>
      <Backdrop onClose={closeregister}/>
      
      </>
      )}
      
    </div>
  );
}

export default LandingPage;
