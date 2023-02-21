import axios from "axios";
import { useState } from "react";
import './Withdraw.css'

function Withdraw() {
  const [status, setStatus] = useState('');

  async function withdraw(e) {
    e.preventDefault();
    if (window.confirm('Are you sure you want to withdraw the gold?')) {
      const userEmail = localStorage.getItem('email'); // get the logged-in user's email from local storage
      await axios.put("http://localhost:5000/withdraw", { email: userEmail, withdrawRequest: 'pending' })
        .then((res) => {
          console.log(res.data);
          setStatus(res.data.withdrawRequest);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="card-container-1">
      <h3>Are you sure you want to withdraw the gold?</h3>
      <div className="y-n-buttons">
        <button className="yes" onClick={withdraw}>Yes</button>
        <button className="no">No</button>
      </div>
      
    </div>
  );
}

export default Withdraw;
