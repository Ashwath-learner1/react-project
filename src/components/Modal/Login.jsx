import React,{useState} from 'react';
import './Login.css'
import ReactDom from 'react-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import jwt from 'jsonwebtoken'

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const history=useNavigate()
  
  async function login(event) {
    event.preventDefault()
    await axios.post('http://localhost:5000/login',{
      email,
      password
    }).then(res=>{
       
       if(res.data.status=='ok' && res.data.user=='Customer'){
        
        
        history("/CustomerDboard")
        
        
    }
    else if(res.data.status=='ok' && res.data.user=='Bankadmin'){
      history('/BankAdmin')
    }
    else if(res.data.status=='ok' && res.data.user=='Jewelleryadmin'){
      history('/JewelleryAdmin')
    }
   
      else if(res.data=='not exist'){
        console.log(res.data)
        alert("not signed up")
      }
    }).catch(e=>{
      alert("wrong details")
      console.log(e)

     })
    
  }


  return ReactDom.createPortal(
    <MDBContainer fluid className="loginmodal">

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
        <form onSubmit={login} action="POST">
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
             
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"
             onChange={(e)=>{setEmail(e.target.value)}} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg1' type='password' size="lg"
              onChange={(e)=>{setPassword(e.target.value)}}/>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' >
                Login
              </MDBBtn>
              
              
              <div>
                <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>

    </MDBContainer>,
    document.getElementById('portal')
  );

            }
export default Login;