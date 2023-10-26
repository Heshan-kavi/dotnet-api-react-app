import React from "react";
import Theme from "../Shared/Components/Theme";
import Background from "../Shared/Components/BackGround";
import {  TwoLevelPieChart, 
          StraightAnglePieChart, 
          CustomActiveShapePieChart, 
          PieChartWithCustomizedLabel,
          PieChartWithPaddingAngleFull,
          PieChartWithPaddingAngleHalf} from '../Shared/Components/Charts/PieChart';
import { Grid } from '../Shared/Components/Grid';
import { H2, Div } from "../Shared/Components/TextContent";

export default function AllPieCharts (props){

    const columns = 3;
    const rowheight = '400px';
    const currentTheme = props.themeToUse;
    
    return (
        <Theme theme={currentTheme}>
            <Background>
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
            </Background>
        </Theme>
    )
}