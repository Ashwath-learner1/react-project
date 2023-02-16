import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData';
import './Sidebar.css'
import axios from 'axios'

const Sidebar = () => {
const [sidebar,setSidebar]=useState(false)
const[isloggedIn,setIsloggedIn]=useState(false)
const history=useNavigate()



async function logout(){
 
  
  await axios.get('http://localhost:5000/logout').then(res =>{
    if(res.data.success){
      
      if(!isloggedIn) {
        setIsloggedIn(false)
        history('/')
      }
    }
    else{
      alert("ERROR:Could not log out")
    }
  })
  
  
  
}


const showSidebar =() => setSidebar(!sidebar)
 return (
  <>
  <div className='sidebar'>
    <Link to="#" className="menu-bars">
    <FaIcons.FaBars onClick={showSidebar}/>
    </Link>
    <div className='logout-container'>
    <button onClick={logout} className='logout-button'>Log out</button>
    </div>
  </div>
  
  <nav className={sidebar ? 'nav-menu-active':'nav-menu'}>
    <ul className='nav-menu-items' onClick={showSidebar}>
      <li className='navbar-toggle'>
        <Link className='menu-bars' to="#">
        <AiIcons.AiOutlineClose />
          </Link>  
      </li>
      {SidebarData.map((item,index)=>{
        return (
          <li key ={index} className={item.cName}>
            <Link to={item.path}> 
            {item.icon}
            <span>{item.title}</span></Link>
          </li>
        )
      })}

    </ul>
  </nav>
  </>
  
 )
  };
  
  export default Sidebar;