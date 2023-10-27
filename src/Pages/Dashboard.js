import React from "react";
import Background from "../Shared/Components/BackGround";
import { CardContainer, CardItem, CardSub, CardMoneyContainer, CardTitle } from "../Shared/Components/Card";
import { TwoLevelPieChart, CustomActiveShapePieChart, StraightAnglePieChart } from "../Shared/Components/Charts/PieChart";
import { Grid } from "../Shared/Components/Grid";
import { Div, H2 } from "../Shared/Components/TextContent";

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

export default function DashBoard (props){

    return (
            <Background>
                <CardContainer>
                    {featuredData && featuredData.map((item, index) => (
                        <CardItem key={index}>
                            <CardTitle>{item.title}</CardTitle>
                            <CardMoneyContainer>
                                <span className="featuredMoney">{item.money}</span>
                                <span className="featuredMoneyRate">{item.moneyRate}</span>
                            </CardMoneyContainer>
                            <CardSub>this is the new rates</CardSub>
                        </CardItem>
                    ))}
                </CardContainer>
                <Grid columns={3} rowheight='400px'>
                    <Div style={{marginBottom: 0}}>
                    <TwoLevelPieChart width="500" height="400" data01={data01} data02={data02}></TwoLevelPieChart>
                    </Div>
                    <Div style={{marginBottom: 0}}>
                    <StraightAnglePieChart width="500" height="400"></StraightAnglePieChart>
                    </Div>
                    <Div style={{marginBottom: 0}}>
                    <CustomActiveShapePieChart width="500" height="400"></CustomActiveShapePieChart>
                    </Div>
                </Grid>
            </Background>
    )
}