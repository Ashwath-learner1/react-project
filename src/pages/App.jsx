import {React,useState,useEffect} from 'react';
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
import Header from '../components/Header/Header';


function App() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  // const[isloggedIn,setIsloggedIn]=useState('')
  const history=useNavigate();

  
  // axios.defaults.withCredentials=true;

  async function login(event) {
    event.preventDefault()
    await axios.post('http://localhost:5000/login',{
      email,
      password
    }).then(res=>{
       
    
       if(res.data.status=='ok'){
        history("/CustomerDboard")
        
     
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

  // useEffect(()=>{
  //   axios.get("http://localhost:5000/login").then(res=>{
  //     console.log(res)
  //   })
  // })
  
  return (
    <>
    {/* <div className='cdheader'>
            <h1>Flexi Scheme</h1>   
            </div> */}
    <Header/>
    <MDBContainer fluid >
    
      
      <MDBRow>

        <MDBCol sm='6'>

          
          <form onSubmit={login}  action="POST">
            <div className='d-flex flex-column justify-content-center  h-custom-2 w-75 pt-4' >

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput value={email} wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" 
              onChange={(e)=>{setEmail(e.target.value)}} />
            <MDBInput value={password} wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg1' type='password' size="lg"
              onChange={(e)=>{setPassword(e.target.value)}} />

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>

          </div>
          </form>
          
          <p className='ms-5'>Don't have an account? <a href="/Register" className="link-info">Register here</a></p>
        </MDBCol>
        
        <MDBCol sm='6' className='d-flex justify-content-center px-0'>
        
          <img src="https://previews.123rf.com/images/teena13/teena131201/teena13120100002/11806916-full-box-of-a-gold-jewelry-on-a-white-background.jpg"
            alt="Login image" className="w-100 d-flex bottom" style={{objectFit: 'cover', objectPosition: 'left'}} />
       
        </MDBCol>
        
      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default App