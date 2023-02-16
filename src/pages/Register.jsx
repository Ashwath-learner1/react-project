import {React,useState} from 'react';
import { useNavigate} from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer, 
  MDBRow,
  MDBCol,

  MDBInput
}
from 'mdb-react-ui-kit';
import axios from 'axios';


function register() {
  const [email,setEmail]=useState('')
  const [Name,setName]=useState('')
  const [Age,setAge]=useState('')
  const [PANno,setPANno]=useState('')
  const [AadharNo,setAadharNo]=useState('')
  const [address,setAddress]=useState('')
  const [password,setPassword]=useState('')
  const [PhoneNo,setPhoneNo]=useState('')
  const history=useNavigate();


  async function Register(event) {
    event.preventDefault()
    await axios.post('http://localhost:5000/register',{
      Name,
      Age,
      address,
      AadharNo,
      PANno,
      PhoneNo,
      email,
      password
    }).then(res=>{
      if(res.data=='exists'){   
        
        alert("already signed up")
       history("/")
       
      }
      else if(res.data=='not exist'){
        history("/")
      }
    }).catch(e=>{
      alert("wrong details")
      

    })
    
  }
  
  return (
    
    
    <MDBContainer fluid>
      
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            {/* <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/> */}
            <span className="h1 fw-bold mb-0">Flexi Scheme</span>
          </div>
          <form onSubmit={Register}  action="POST">
            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Sign Up</h3>

            <MDBInput value={Name} wrapperClass='mb-4 mx-5 w-100' label='Name' id='formControlLg' size="lg" 
              onChange={(e)=>{setName(e.target.value)}} />
            <MDBInput value={Age} wrapperClass='mb-4 mx-5 w-100' label='Age' id='formControlLg1' size="lg" 
              onChange={(e)=>{setAge(e.target.value)}} />
            <MDBInput value={address} wrapperClass='mb-4 mx-5 w-100' label='address' id='formControlLg2' type='text' size="lg" 
              onChange={(e)=>{setAddress(e.target.value)}} />
            <MDBInput value={AadharNo} wrapperClass='mb-4 mx-5 w-100' label='AadharNo' id='formControlLg3'  type='number'  size="lg" 
              onChange={(e)=>{setAadharNo(e.target.value)}} />
            <MDBInput value={PANno} wrapperClass='mb-4 mx-5 w-100' label='PAN' id='formControlLg4' type='text'size="lg" 
              onChange={(e)=>{setPANno(e.target.value)}} />
            <MDBInput value={PhoneNo} wrapperClass='mb-4 mx-5 w-100' label='PhoneNo' id='formControlLg4' type='number'size="lg" 
              onChange={(e)=>{setPhoneNo(e.target.value)}} />
            <MDBInput value={email} wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg5' type='email' size="lg" 
              onChange={(e)=>{setEmail(e.target.value)}} />
            <MDBInput value={password} wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg16' type='password' size="lg"
              onChange={(e)=>{setPassword(e.target.value)}} />

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Register</MDBBtn>

          </div>
          </form>
          
        
        </MDBCol>

        <MDBCol sm='6' className='d-flex flex-column justify-content-center px-0'>
        
        <img src="https://previews.123rf.com/images/teena13/teena131201/teena13120100002/11806916-full-box-of-a-gold-jewelry-on-a-white-background.jpg"
          alt="Login image" className="w-100 d-flex fit-content" style={{objectFit: 'cover', objectPosition: 'left'}} />
     
      </MDBCol>
      
      </MDBRow>

    </MDBContainer>
  );
}

export default register;