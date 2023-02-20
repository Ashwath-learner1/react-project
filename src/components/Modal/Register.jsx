import React,{useState} from 'react';
import ReactDom from 'react-dom'
import { useNavigate } from 'react-router-dom';

import './Register.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
 
}
from 'mdb-react-ui-kit';
import axios from 'axios'

function Register(  ) {
  const [email,setEmail]=useState('')
  const [Name,setName]=useState('')
  const [Age,setAge]=useState('')
  const [PANno,setPANno]=useState('')
  const [AadharNo,setAadharNo]=useState('')
  const [address,setAddress]=useState('')
  const [password,setPassword]=useState('')
  const [PhoneNo,setPhoneNo]=useState('')
  const type=useState('Customer')
  const history=useNavigate();

  async function register(event) {
    event.preventDefault()
    await axios.post('http://localhost:5000/register',{
      Name,
      Age,
      address,
      AadharNo,
      PANno,
      PhoneNo,
      email,
      password,type
	
    }).then(res=>{
      if(res.data=='exists'){   
        
        alert("already signed up")
       history("/")
       
      }
      else if(res.data=='not exist'){
        alert("New user added")
        history("/")
      }
    }).catch(e=>{
      alert("wrong details")
      console.log(e)
    })
    
  


    }
  return ReactDom.createPortal (
    <div className='registermodal'>
    <MDBContainer fluid className='h-custom'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12' className='m-5'>

          <MDBCard className='card-registration card-registration-2' style={{borderRadius: '15px'}}>
            
            <MDBCardBody className='p-0'>
            <form onSubmit={register} action="POST">
              <MDBRow>
                
                <MDBCol md='6' className='p-5 bg-black'>

                  <h3 className="fw-normal mb-5" style={{color: 'white'}}>General Infomation</h3>
                  <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' labelClass='text-white' className='text-white'
                  onChange={(e)=>{setName(e.target.value)}}/>
                  <MDBInput wrapperClass='mb-4' label='Age' size='lg' id='form2' type='text' labelClass='text-white' className='text-white'
                  onChange={(e)=>{setAge(e.target.value)}}/>
                  <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form3' type='text' labelClass='text-white' className='text-white'
                   onChange={(e)=>{setAddress(e.target.value)}}/>
                  <MDBInput wrapperClass='mb-4' label='PhoneNo' size='lg' id='form4' type='text' labelClass='text-white' className='text-white'
                   onChange={(e)=>{setPhoneNo(e.target.value)}}/>
                  <MDBInput wrapperClass='mb-4' label='PAN' size='lg' id='form5' type='text' labelClass='text-white' className='text-white'
                  onChange={(e)=>{setPANno(e.target.value)}}/>
                  <MDBInput wrapperClass='mb-4' label='Aadhar No' size='lg' id='form6' type='text' labelClass='text-white' className='text-white'
                  onChange={(e)=>{setAadharNo(e.target.value)}}/>



                </MDBCol>


                <MDBCol md='6' className='bg-indigo p-5'>

                  <h3 className="fw-normal mb-5 text-white" style={{color: '#4835d4'}}>Create Your account </h3>
                  

                  
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Email' size='lg' id='form8' type='email' className='text-white'
                  onChange={(e)=>{setEmail(e.target.value)}}/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Password' size='lg' id='form9' type='password' className='text-black'
                  onChange={(e)=>{setPassword(e.target.value)}}/>
                  <MDBBtn color='dark' size='lg' >Register</MDBBtn>

                </MDBCol>
              </MDBRow>
              </form>
            </MDBCardBody>
           
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>,
    document.getElementById('portal')
  );
  
}

export default Register;