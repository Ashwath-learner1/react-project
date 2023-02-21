import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
// import * as IoIcons from "react-icons/io"
import{Modal} from"react-bootstrap"


function SidebarData() {
     const SidebarData=[
        // {
        //     title:'Pay Amount',
        //     path:'/Payment',
        //     icon:<FaIcons.FaRupeeSign/>,
        //     cName:'nav-text'
        // },
        {
            title:'Withdraw Gold',
            path:() => {
                // Code to display the Withdraw Gold modal goes here
                setShowWithdrawGoldModal(true);
            },
            icon:<AiIcons.AiFillGold/>,
            cName:'nav-text'
        }
    ];
    const [showWithdrawGoldModal, setShowWithdrawGoldModal] = useState(false);
  
    return (
      <div>
        
        <Modal show={showWithdrawGoldModal} onHide={() => setShowWithdrawGoldModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Withdraw Gold</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure?
          </Modal.Body>
        </Modal>
      </div>
    );
  }
  
  export default SidebarData;
