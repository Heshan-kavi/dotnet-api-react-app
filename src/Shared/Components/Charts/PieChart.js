import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { useTheme } from "styled-components";

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

function GetTheTheme() {
  const theme = useTheme();
  return theme;
}

export function TwoLevelPieChart (props){

    // const theme = useTheme();
    return (
        <PieChart width={parseInt(props.width)} height={parseInt(props.height)}>
        <Pie
            data={data01}
            dataKey="value"
            cx={200}
            cy={200}
            outerRadius={60}
            fill="#8884d8"
            stroke={GetTheTheme().color.background}
            outline="none"
        />
        <Pie
            data={data02}
            dataKey="value"
            cx={200}
            cy={200}
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            stroke={GetTheTheme().color.background}
            outline="none"
            label
        />
        </PieChart>
    )
}

export function StraightAnglePieChart(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={parseInt(props.width)} height={parseInt(props.height)}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            stroke={GetTheTheme().color.background}
            label
          />
        </PieChart>
      </ResponsiveContainer>
  );
}
