import { styled } from "styled-components";


export const H1 = styled.h1`
    letter-spacing: ${({ theme }) => theme.letterSpacing.common};;
    color: ${({ theme }) => theme.color.fontcolor}
`;

export const H2 = styled.h2`
    letter-spacing: ${({ theme }) => theme.letterSpacing.common};;
    color: ${({ theme }) => theme.color.fontcolor}
`;

export const P = styled.p`
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.color.fontcolor}
`;

export const Div = styled.div`
  marginBottom: 0;
  color: ${({ theme }) => theme.color.fontcolor};
`;