import { styled } from "styled-components";

const Background = styled.div`
    text-align: center;
    margin-block-start: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${({ theme }) => theme.color.background};
    max-width: 100%;
`;

export default Background;