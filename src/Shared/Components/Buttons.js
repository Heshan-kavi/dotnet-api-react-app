import { styled } from "styled-components";

export const PrimaryButton = styled.button`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1em;
    font-family: Fjalla One;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 3px;
    background: ${({ theme }) => theme.color.background};
`;

export const SecondaryButton = styled(PrimaryButton)`
    color: ${({ theme }) => theme.color.background};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
`;

export const LoginButton = styled(PrimaryButton)`
    color: ${({ theme }) => theme.colors.success};
    border: 2px solid ${({ theme }) => theme.colors.success};
    background: ${({ theme }) => theme.color.background};
`;

export const SignupButton = styled(PrimaryButton)`
    color: ${({ theme }) => theme.color.background};
    border: 2px solid ${({ theme }) => theme.colors.success};
    background: ${({ theme }) => theme.colors.success};
`;