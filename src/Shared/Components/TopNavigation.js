import { styled } from "styled-components";
import * as FaIcons from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export const AnchorTag = styled.a`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 18px;
    text-decoration: none;
    font-size: 17px;
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.color.background};
    }
    &:active {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.color.background};
    }
`;

export const LinkTag = styled(Link)`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 18px;
    text-decoration: none;
    font-size: 17px;
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.color.background};
    }
    &:active {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.color.background};
    }
`;

export const TopNavigationBar = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    overflow: hidden;
`;

function TopNavigation(){
    return (
        <TopNavigationBar>
            <AnchorTag ><FaIcons.FaBars/></AnchorTag>
            <LinkTag to="/dashboard">DashBoard</LinkTag>
            <LinkTag to="/home">Home</LinkTag>
            <LinkTag to="/piecharts">PieCharts</LinkTag>
            <LinkTag to="/userprofile">Profile</LinkTag>
            <Outlet/>
      </TopNavigationBar>
    );
}

export default TopNavigation;


