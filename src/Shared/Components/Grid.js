import { styled } from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-auto-rows: ${props => props.rowheight};
    grid-gap: 5px;
`;