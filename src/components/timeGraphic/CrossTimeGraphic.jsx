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
import React, { useEffect, useState } from "react";

export default function CrossTimeGraphic(props) {
  const [integratedData, setIntegratedData] = useState([]);

  useEffect(() => {
    if (props.data1 && props.data2) {
      setIntegratedData(getIntegratedData(props.data1, props.data2));
    }
  }, [props.data1, props.data2]);
  return (
    <div>
      <ResponsiveContainer width={"95%"} height={200}>
        <LineChart data={integratedData} margin={{}}>
          <CartesianGrid />
          <YAxis />
          <XAxis dataKey="index" tick={{ fontSize: 10 }} />
          <Line type="monotone" dataKey="time1" stroke={props.color1} />
          <Line type="monotone" dataKey="time2" stroke={props.color2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const formatData = (data) => {
  data = data.map(function (element, index) {
    element.realTime = element.time / 1000;
    element.index = index;
    return element;
  });
  return data;
};

const getIntegratedData = (times1, times2) => {
  if (times1 >= times2) {
    return times1.map(function (element, index) {
      element.time1 = element.time / 1000;
      element.index = index;
      if (times2[index]) {
        element.time2 = times2[index].time / 1000;
      } else {
        element.time2 = null;
      }
      return element;
    });
  } else {
    return times2.map(function (element, index) {
      element.time2 = element.time / 1000;
      element.index = index;
      if (times1[index]) {
        element.time1 = times1[index].time / 1000;
      } else {
        element.time1 = null;
      }
      return element;
    });
  }
};
