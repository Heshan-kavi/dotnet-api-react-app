import React from "react";
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

    const columns = 3;
    const rowheight = '400px';
    
    return (
            <Background>
                <H2>
                    Piecharts
                </H2>
                <Grid columns={columns} rowheight={rowheight}>
                    <Div style={{marginBottom: 0}}>
                    <p>Two Level Pie Chart</p>
                    <TwoLevelPieChart width="500" height="400" data01={data01} data02={data02}></TwoLevelPieChart>
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
    )
}