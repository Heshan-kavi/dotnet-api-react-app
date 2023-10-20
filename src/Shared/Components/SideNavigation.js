import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import './SideNavigation.css';

function SideNavigation (props){

    const [isSideBarOpen, setIsSideBarOpen] = useState(false); 

    function onOpenClickHandler(){
        setIsSideBarOpen(!isSideBarOpen);
    }

    return (
        <>
            <button onClick={onOpenClickHandler}><FaIcons.FaBars/></button>
            <nav className={isSideBarOpen ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li onClick={onOpenClickHandler} style={{fontWeight: 800, backgroundColor: "white"}}>Close</li>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </nav>
        </>
    )
}

export default SideNavigation;