import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import * as DiIcons from "react-icons/di"
import * as FiIcons from "react-icons/fi"


export const SidebarData = [
    {
        title: "Skills",
        path: "/skills",
        icon: <DiIcons.DiCodeigniter />,
        cName: "nav-text"
    }, 
    {
        title: "Projects",
        path: "/projects",
        icon: <FaIcons.FaRegSmileBeam />,
        cName: "nav-text"
    }, 
    {
        title: "Experience",
        path: "/experience",
       // icon: <IoIcons.IoAccessibilitySharp />,
       icon: <FaIcons.FaRegSmileBeam />,
       cName: "nav-text"
    }, 
    {
        title: "Hobbies",
        path: "/hobbies",
        icon: <FiIcons.FiActivity />,
        cName: "nav-text"
    }, 
    {
        title: "Contact",
        path: "/contact",
        icon: <IoIcons.IoIosContact />,
        cName: "nav-text"
    }
]
