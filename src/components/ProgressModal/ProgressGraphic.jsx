import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import React, { useEffect, useState } from "react";
import { getTimeWithPlus2 } from "../lib/SingleTimeUtil";

export default function ProgressGraphic(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.listOfTimes) {
      setData(getData(props.listOfTimes));
    }
  }, [props.listOfTimes]);
  return (
    <div>
      <ResponsiveContainer width={props.width} height={props.height}>
        <LineChart
          data={data}
          style={{ width: props.width, height: props.height }}
        >
          <CartesianGrid />
          <YAxis>
            {/* <Label
              style={{
                textAnchor: "middle",
                fontSize: "130%",
                fill: "black",
              }}
              angle={270}
              value={"Round"}
            /> */}
          </YAxis>
          <XAxis dataKey="index" tick={{ fontSize: 10 }}>
            {/* <Label
              style={{
                textAnchor: "middle",
                fontSize: "130%",
                fill: "black",
              }}
              value={"Time"}
            /> */}
          </XAxis>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="time1"
            stroke={"green"}
            name={props.playerName}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const getData = (times1) => {
  return times1.map(function (element, index) {
    element.time1 = getTimeWithPlus2(element) / 1000;
    element.index = index;
    return element;
  });
};
