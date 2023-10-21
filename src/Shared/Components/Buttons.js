import { styled } from "styled-components";

export const PrimaryButton = styled.button`
    color: #BF4F74;
    font-size: 1em;
    font-family: Fjalla One;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    background: ${({ theme }) => theme.color.background};
`;

export const SecondaryButton = styled.button`
    color: ${({ theme }) => theme.color.background};
    font-size: 1em;
    font-family: Fjalla One;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({ theme }) => theme.color.background};
    border-radius: 3px;
    background: #BF4F74;
`;

export const LoginButton = styled(PrimaryButton)`
    color: mediumseagreen;
    border: 2px solid mediumseagreen;
    background: ${({ theme }) => theme.color.background};
`;

export const SignupButton = styled(PrimaryButton)`
    color: ${({ theme }) => theme.color.background};
    border: 2px solid mediumseagreen;
    background: mediumseagreen;
`;