import { styled } from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: left;
`
export const CardItem = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    background: ${({ theme }) => theme.color.background};
`
export const CardTitle = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme.color.fontcolor};
`
export const CardMoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.fontcolor};
    .featuredMoney{
        font-size: 30px;
        font-weight: 600;
    }
    .featuredMoneyRate{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
.featuredIcon{
        font-size: 14px;
        margin-left: 5px;
        color: green;
    }
.featuredIcon.negative{
        color: red;
    }
`
export const CardSub = styled.span`
    font-size: 15px;
    color: gray;
`