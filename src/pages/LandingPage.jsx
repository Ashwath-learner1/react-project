import React from "react";
import "./LandingPage.css";
import Header from"../components/Header/Header"
import Footer from"../components/Header/Footer"


// import { useNavigate } from "react-router-dom";
import Login from "../components/Modal/Login";
import { useState } from "react";
import Register from "../components/Modal/Register";
import Backdrop from "../components/Modal/Backdrop";

function LandingPage(props) {
  // const navigate = useNavigate();
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
    <div className="main-container">
      <h1>Header</h1>
      <Header/>
      <button className="login-btn" onClick={login} >
        Login
      </button>
      <button className="Register-btn" onClick={register} >
        Register
      </button>
      {isLoginModalOpen && (<>
       <Backdrop onClose={closelogin}/> <Login onLogin={login}/>
       </>)}
      
      
      {isRegistermodalOpen && (
        <>
        <Register onClick={register}/>
      <Backdrop onClose={closeregister}/>
      
      </>
      )}
      <Footer/>
    </div>
  );
}

export default LandingPage;
