import axios from "axios";
// import Sidebar from "../components/Sidebar";
import { React, useState } from "react";
// import { redirect } from "react-router-dom";

function Withdraw() {
  const request=useState('Yes')
  
  async function withdraw(e) {
    e.preventDefault();
    await axios
      .put("http://localhost:5000/withdraw", {
       
        request
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  return (
    <>
      
      
        <div className="card-container-1">
          <h3>Are you sure you want to withdraw the gold?</h3>
          
          <div className="y-n-buttons">
            <button className="yes" onClick={withdraw}>Yes</button>
            
            <button className="no">No</button>
          </div>
        </div>
      
    </>
  );
}

export default Withdraw;
