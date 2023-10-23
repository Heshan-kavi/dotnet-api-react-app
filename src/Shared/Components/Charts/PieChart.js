import React, {useState} from "react";
import { PieChart, Pie, ResponsiveContainer, Sector } from "recharts";
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

const renderActiveShapeForActiveShapePie = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#8884d8" >{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

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

export function CustomActiveShapePieChart (props) {

  const [activeIndex, setActiveIndex] = useState(0);

  function onPieEnter (_, index) {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={parseInt(props.width)} height={parseInt(props.height)}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShapeForActiveShapePie}
            data={data01}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            stroke={GetTheTheme().color.background}
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
  );
}
