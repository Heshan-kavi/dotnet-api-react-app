import { styled } from "styled-components";
import * as FaIcons from "react-icons/fa";

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

export const TopNavigationBar = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
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


