import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React from "react";
export default function TimeGraphic(props) {
  return <div>{chartOfData(props.actualData, props.color)}</div>;
}

const chartOfData = (data, color) => {
  return (
    <ResponsiveContainer width={1800} height={700}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          data={data}
          dataKey="realTime"
          stroke={color}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
