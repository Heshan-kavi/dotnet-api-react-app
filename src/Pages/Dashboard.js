import React from "react";
import { styled } from "styled-components";
import { TextWrapper } from "../globalStyles";
import { CardContainer, CardItem, CardSub, CardMoneyContainer, CardTitle } from "../Shared/Components/Card";
import { TwoLevelPieChart, CustomActiveShapePieChart, StraightAnglePieChart } from "../Shared/Components/Charts/PieChart";
import { Grid } from "../Shared/Components/Grid";
import { Div } from "../Shared/Components/TextContent";

const featuredData = [
    {title: "Revenue", money: "$3,300", moneyRate: "+12.4"},
    {title: "Sales", money: "$5,300", moneyRate: "+5.6"},
    {title: "Cost", money: "$2,000", moneyRate: "+4.7"},
    {title: "Sales", money: "$5,300", moneyRate: "+5.6"}
]

const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 }
  ];

  var chartHeight = 0;
  var charWidth = 0;

export const DashboardSection = styled.div`
  display : flex;
  padding: 50px 20px;
  flex-direction : column;
  background: ${({ theme }) => theme.color.background};
  align-items: center;
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px){
    width: 90%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 100%;
  margin-top: ${({mg_top}) => mg_top ? mg_top : ''};

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const DetailsCard = styled.div`
    padding: 30px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    margin: 0.7rem;

    @media screen and (max-width: 500px) {
        width: 90%;
    }

    @media screen and (min-width: 1024px){
        padding-right: 100px;
        padding-left: 100px;
    }

    &:hover{
        background: ${({ theme }) => theme.colors.primary};
        @media screen and (min-width: 500px) {
            transform: scale(1.06);
        }
        > span {
            color: ${({ theme }) => theme.color.background};
        }
        > p {
            color: ${({ theme }) => theme.color.background};
        }
    }
`;

export const DetailsCardTitle = styled.span`
    color: ${({ theme }) => theme.color.fontcolor};
    font-size: 16px;

    @media screen and (min-width: 500px) {
        font-size: 18px;
    }

    @media screen and (min-width: 768px) {
        font-size: 22px;
    }
`;

export const DetailsCardValue = styled.p`
    color: ${({ theme }) => theme.color.fontcolor};
    font-size: 24px;
    margin: 12px 0px;

    @media screen and (min-width: 500px) {
        font-size: 26px;
        margin: 15px 0px;
    }

    @media screen and (min-width: 768px) {
        font-size: 30px;
        margin: 18px 0px;

    .featuredMoneyRate{
        font-size: 16px;
        margin-left: 22px;

        @media screen and (min-width: 500px) {
            font-size: 18px;
        }
    
        @media screen and (min-width: 768px) {
            font-size: 22px;
        }
    }
`;

export const DetailsCardPara = styled.p`
    color: ${({ theme }) => theme.color.fontcolor};
    font-size: 14px;

    @media screen and (min-width: 500px) {
        font-size: 16px;
    }

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`;

export const ChartsCard = styled.div`
    width: 300px;
    height: 300px;
    text-align: -webkit-center;
    padding-top: ${({pd_top}) => pd_top ? pd_top : ''};
    padding-right: ${({pd_right}) => pd_right ? pd_right : ''};

    @media screen and (min-width: 768px) {
        width: 400px;
        height: 400px;
    }
`;

export default function DashBoard (props){

    return (
            <DashboardSection>
                <DashboardWrapper>
                    <DetailsContainer>
                        {featuredData && featuredData.map((item, index) => (
                            <DetailsCard key={index}>
                                <DetailsCardTitle>{item.title}</DetailsCardTitle>
                                <DetailsCardValue>
                                    <span className="featuredMoney">{item.money}</span>
                                    <span className="featuredMoneyRate">{item.moneyRate}</span>
                                </DetailsCardValue>
                                <DetailsCardPara>this is the new rates</DetailsCardPara>
                            </DetailsCard>
                        ))}
                    </DetailsContainer>
                    <DetailsContainer mg_top="20px">
                        <ChartsCard>
                            <TwoLevelPieChart width="300" height="300" data01={data01} data02={data02}></TwoLevelPieChart>
                        </ChartsCard>
                        <ChartsCard pd_top="30px" pd_right="30px">
                            <StraightAnglePieChart width="300" height="300"></StraightAnglePieChart>
                        </ChartsCard>
                        <ChartsCard>
                            <CustomActiveShapePieChart width="300" height="300"></CustomActiveShapePieChart>
                        </ChartsCard>
                    </DetailsContainer>
                </DashboardWrapper>
            </DashboardSection>
    )
}