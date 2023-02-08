import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
// import * as IoIcons from "react-icons/io"

export const SidebarData=[
    {
        title:'Pay Amount',
        path:'/Payment',
        icon:<FaIcons.FaRupeeSign/>,
        cName:'nav-text'
    },
    {
        title:'Withdraw Gold',
        path:'/Withdraw',
        icon:<AiIcons.AiFillGold/>,
        cName:'nav-text'
    }
]
