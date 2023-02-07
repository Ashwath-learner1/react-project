import {React,useState} from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import {
  MDBBtn,
  MDBContainer, 
  MDBRow,
  MDBCol,

  MDBInput
}
from 'mdb-react-ui-kit';
const Sidebar = () => {
  const [amount,setAmount]=useState('')
  // const[active,setActive]=useState(true)

  
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Sidebar
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: '20px 5px',
              }}
            >
              <CDBSidebarMenuItem active  >Pay amount </CDBSidebarMenuItem>
              <CDBSidebarMenuItem>Withdraw Gold </CDBSidebarMenuItem>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>

        <MDBContainer fluid>
            <MDBRow>
            <MDBCol sm='6'>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <MDBBtn className="mb-4 px-5 mx-5 w-100">Pay amount</MDBBtn>
            </MDBCol>
            </MDBRow>
            
        </MDBContainer>
      </div>
    );
  };
  
  export default Sidebar;