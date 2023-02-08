import axios from 'axios'
import {React,useState} from 'react'

function Withdraw() {
  const[email,setEmail]=useState('')
  
  async function withdraw(e){
    e.preventDefault()
    await axios.put('http://localhost:5000/withdraw',{
      email
    }).then(res=>{
      console.log(res.data)
    })
  }
  return (
   
    <>
    <form onSubmit={withdraw} action="PUT">
    <div>
        <input placeholder="Enter your Email id" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button >Withdraw</button>
    </div>
    </form>
    
    </>
  )
}

export default Withdraw