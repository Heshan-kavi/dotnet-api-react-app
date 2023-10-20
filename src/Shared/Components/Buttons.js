import { styled } from "styled-components";

export const PrimaryButton = styled.button`
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    background: white;
`;

export const SecondaryButton = styled.button`
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid white;
    border-radius: 3px;
    background: #BF4F74;
`;

export const LoginButton = styled(PrimaryButton)`
    color: mediumseagreen;
    border: 2px solid mediumseagreen;
    background: white;
`;

export const SignupButton = styled(PrimaryButton)`
    color: white;
    border: 2px solid mediumseagreen;
    background: mediumseagreen;
`;