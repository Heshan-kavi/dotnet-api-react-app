import { styled } from "styled-components";

export const Button = styled.button`
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    background: white;
`;

export const LoginButton = styled(Button)`
    color: mediumseagreen;
    border: 2px solid mediumseagreen;
    background: white;
`;

export const SignupButton = styled(Button)`
    color: white;
    border: 2px solid mediumseagreen;
    background: mediumseagreen;
`;