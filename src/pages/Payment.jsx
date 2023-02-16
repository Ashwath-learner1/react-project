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
        <MDBContainer fluid >
            <MDBRow>
                <MDBCol  >
                    <h1>2500</h1>
            <MDBInput value={amount} onChange={(e)=>setAmount(e.target.value)}/><br/>
           
           <MDBBtn className='h-90'>Pay Amount</MDBBtn>
           </MDBCol>
                <MDBCol>
                <h1>5000</h1>
            <MDBInput value={amount} onChange={(e)=>setAmount(e.target.value)}/><br/>
           
           <MDBBtn className='h-90'>Pay Amount</MDBBtn>
           </MDBCol>
                <MDBCol>
                <h1>10000</h1>
            <MDBInput value={amount} onChange={(e)=>setAmount(e.target.value)}/><br/>
           
           <MDBBtn className='h-90'>Pay Amount</MDBBtn>
           </MDBCol>
            </MDBRow>
            
        </MDBContainer>

    )
}

export default Payment