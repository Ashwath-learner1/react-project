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


function App() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const history=useNavigate();

  async function login(event) {
    event.preventDefault()
    await axios.post('http://localhost:5000/login',{
      email,
      password
    }).then(res=>{
      if(res.data=='exists'){
       console.log(res.data);
       console.log("success")
       history("/CustomerDboard")
       
      }
      else if(res.data=='not exist'){
        alert("not signed up")
      }
    }).catch(e=>{
      alert("wrong details")
      console.log(e)

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
          <form onSubmit={login} action="POST">
            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput value={email} wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" 
              onChange={(e)=>{setEmail(e.target.value)}} />
            <MDBInput value={password} wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg1' type='password' size="lg"
              onChange={(e)=>{setPassword(e.target.value)}} />

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>

          </div>
          </form>
          
        
        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://previews.123rf.com/images/teena13/teena131201/teena13120100002/11806916-full-box-of-a-gold-jewelry-on-a-white-background.jpg"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App