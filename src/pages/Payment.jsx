import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer, 
    MDBRow,
    MDBCol,
  
    MDBInput
  }
  from 'mdb-react-ui-kit';
const Payment=()=>{
    const [amount,setAmount]=useState(0)
    
    return (
        <MDBContainer fluid>
            <MDBRow>
            <MDBInput value={amount} onChange={(e)=>setAmount(e.target.value)}/><br/>
           
           <MDBBtn className='h-90'>Pay Amount</MDBBtn>
            </MDBRow>
            
        </MDBContainer>

    )
}

export default Payment