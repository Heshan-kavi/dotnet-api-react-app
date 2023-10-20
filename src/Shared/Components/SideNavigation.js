import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { styled } from "styled-components";
import { PrimaryButton } from "./Buttons";
import './SideNavigation.css';

const Ul = styled.ul`
    list-style-type: none;
    padding-left: 0px;
`;

const Li = styled.li`
    width: 250px;
    height: 50px;
    padding-top: 25px;
    &:hover{
        background-color: white;
        color: #BF4F74;
    }
`;

const Nav = styled.nav`
    background-color: #BF4F74;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 650ms;
    ${({ active }) => active && `
    left: 0;
    transition: 850ms;
  `}
`;

function SideNavigation (props){

    const [isSideBarOpen, setIsSideBarOpen] = useState(false); 

    function onOpenClickHandler(){
        setIsSideBarOpen(!isSideBarOpen);
    }

    return (
        <>
            <PrimaryButton onClick={onOpenClickHandler} style={{border: 'none'}}><FaIcons.FaBars/></PrimaryButton>
            <Nav active={isSideBarOpen}>
                <Ul>
                    <Li onClick={onOpenClickHandler} style={{fontWeight: 800, backgroundColor: "white"}}>Close</Li>
                    <Li>Home</Li>
                    <Li>About</Li>
                </Ul>
            </Nav>
        </>
    )
}

export default SideNavigation;