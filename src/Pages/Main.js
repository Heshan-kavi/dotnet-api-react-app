import React, { useState } from "react";
import TopNavigation from '../Shared/Components/TopNavigation';
import { H1, H2, P } from '../Shared/Components/TextContent';
import { PrimaryButton, SecondaryButton, LoginButton, SignupButton } from '../Shared/Components/Buttons';
import SideNavigation from '../Shared/Components/SideNavigation';
import {  TwoLevelPieChart, 
          StraightAnglePieChart, 
          CustomActiveShapePieChart, 
          PieChartWithCustomizedLabel,
          PieChartWithPaddingAngleFull,
          PieChartWithPaddingAngleHalf} from '../Shared/Components/Charts/PieChart';
import { Grid } from '../Shared/Components/Grid';
import { styled } from "styled-components";

const Div = styled.div`
  marginBottom: 0;
  color: ${({ theme }) => theme.color.fontcolor};
`;

export default function Main (){

    const [columns, setColumns] = useState(3);
    const [rowheight, setRowheight] = useState('400px');

    return (
        <>
            <H1>
                Top navigation
            </H1>
            <TopNavigation/>
            <H1>
                Side navigation
            </H1>
            <SideNavigation/>
            <H1>
                Testing buttons
            </H1>
            <H2>
                Usual buttons
            </H2>
            <PrimaryButton>Primary Button</PrimaryButton>
            <H2>
                Second Usual buttons
            </H2>
            <SecondaryButton>Secondary Button</SecondaryButton>
            <H2>
                Login button
            </H2>
            <LoginButton >Login Button</LoginButton>
            <H2>
                Signup button
            </H2>
            <SignupButton >Signup Button</SignupButton>
            <H1>
                Testing paragraph
            </H1>
            <P>
                this is the testing paragraph of this application
            </P>
            <H1>
                Charts
            </H1>
            <H2>
                Piecharts
            </H2>
            <Grid columns={columns} rowheight={rowheight}>
                <Div style={{marginBottom: 0}}>
                <p>Two Level Pie Chart</p>
                <TwoLevelPieChart width="500" height="400"></TwoLevelPieChart>
                </Div>
                <Div style={{marginBottom: 0}}>
                <p>Straight Angle Pie Chart</p>
                <StraightAnglePieChart width="500" height="400"></StraightAnglePieChart>
                </Div>
                <Div style={{marginBottom: 0}}>
                <p>Custom Active Shape Pie Chart</p>
                <CustomActiveShapePieChart width="500" height="400"></CustomActiveShapePieChart>
                </Div>
                <Div style={{marginBottom: 0}}>
                <p>Customized Labled Pie Chart</p>
                <PieChartWithCustomizedLabel width="500" height="400"></PieChartWithCustomizedLabel>
                </Div>
                <Div style={{marginBottom: 0}}>
                <p>Pie Chart With Padding - Full </p>
                <PieChartWithPaddingAngleFull width="500" height="400"></PieChartWithPaddingAngleFull>
                </Div>
                <Div style={{marginBottom: 0}}>
                <p>Pie Chart With Padding - Half</p>
                <PieChartWithPaddingAngleHalf width="500" height="400"></PieChartWithPaddingAngleHalf>
                </Div>
            </Grid>
        </>
    )
}