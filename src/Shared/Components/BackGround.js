import { styled } from "styled-components";

const Background = styled.div`
    text-align: center;
    margin-block-start: 0px;
    padding-top: 20px;
    background-color: ${({ theme }) => theme.color.background};
`;

export default Background;