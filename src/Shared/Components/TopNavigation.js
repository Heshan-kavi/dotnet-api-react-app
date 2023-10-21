import { styled } from "styled-components";
import * as FaIcons from "react-icons/fa";
import SideNavigation from "./SideNavigation";

export const AnchorTag = styled.a`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 18px;
    text-decoration: none;
    font-size: 17px;
    &:hover,
    &:focus {
        color: #BF4F74;
        background-color: white;
    }
    &:active {
        color: #BF4F74;
        background-color: white;
    }
`;

export const TopNavigationBar = styled.div`
    background-color: #BF4F74;
    overflow: hidden;
`;

function TopNavigation(){
    return (
        <TopNavigationBar>
            <AnchorTag ><FaIcons.FaBars/></AnchorTag>
            <AnchorTag href="#news">toggle</AnchorTag>
            <AnchorTag href="#news">news</AnchorTag>
            <AnchorTag href="#news">about</AnchorTag>
            <AnchorTag href="#news">help</AnchorTag>
      </TopNavigationBar>
    );
}

export default TopNavigation;


