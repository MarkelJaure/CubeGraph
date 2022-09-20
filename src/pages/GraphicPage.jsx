import { useEffect, useState } from "react";
import cubeData from "../data.json";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { DashboardLayout } from "../components/sidebar/LeftSidebar/LeftSideLayout";
import TimeGraphic from "../components/TimeGraphic/TimeGraphic";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

export default function GraphicPage() {
  const [actualData, setActualData] = useState(
    cubeData?.times?.oficials[333]?.normal
  );

  const [avgData5, setAvgData5] = useState(getAvgData(actualData, 5));
  const [avgData10, setAvgData10] = useState(getAvgData(actualData, 10));
  const [avgData50, setAvgData50] = useState(getAvgData(actualData, 50));

  const [actualPage, setActualPage] = useState(0);

  useEffect(() => {
    if (actualData) {
      setActualData(formatData(actualData));
      setAvgData5(formatData(avgData5));
      setAvgData10(formatData(avgData10));
      setAvgData50(formatData(avgData50));
    }
  }, []);

  return (
    <>
      <DashboardLayout>
        <div>
          <Paper square>
            <Tabs
              value={actualPage}
              textColor="primary"
              indicatorColor="primary"
              onChange={(event, newValue) => {
                setActualPage(newValue);
              }}
            >
              <Tab label="Times" />
              <Tab label="Avg5" />
              <Tab label="Avg10" />
              <Tab label="Avg50" />
            </Tabs>

            <TabPanel value={actualPage} index={0}>
              <TimeGraphic actualData={actualData} color="green" />
            </TabPanel>
            <TabPanel value={actualPage} index={1}>
              <TimeGraphic actualData={avgData5} color="red" />
            </TabPanel>
            <TabPanel value={actualPage} index={2}>
              <TimeGraphic actualData={avgData10} color="blue" />
            </TabPanel>
            <TabPanel value={actualPage} index={3}>
              <TimeGraphic actualData={avgData50} color="brown" />
            </TabPanel>
          </Paper>
        </div>

        {/* <h2>Porcentage</h2>
        {porcentageOfData(actualData, 50)} */}
      </DashboardLayout>
    </>
  );
}

const formatData = (data) => {
  data = data.map(function (element) {
    element.realTime = element.time / 1000;

    element.date = new Date(element.date);

    element.stamp = `${element.date.getDate().toString().padStart(2, "0")}/${(
      element.date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}`;

    return element;
  });
  return data;
};

const getAvgData = (data, interval) => {
  var avgData = [];
  var avgTime = 0;
  var avgDate = 0;

  for (var i = 1; i < data.length; i++) {
    avgTime += data[i].time;
    if (i % interval === 0) {
      avgTime = Math.round(avgTime / interval);
      avgDate = data[i].date;
      avgData.push({ time: avgTime, date: avgDate });
      avgTime = 0;
    }
  }

  return avgData;
};

const porcentageOfData = (data, amount) => {
  var min = 0;
  var max = data[0].time;
  for (let aTime of data) {
    if (aTime.time > max) max = aTime.time;
  }

  var step = Math.round(max / amount);

  var resultArray = [];

  for (var i = min; i < max; i = i + step) {
    var valids = data.filter((time) => time.time > i && time.time < i + step);
    resultArray.push({ from: i, to: i + step, count: valids.length });
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={resultArray}>
        <XAxis dataKey="from" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="rgba(106, 110, 229)" />
      </BarChart>
    </ResponsiveContainer>
  );
};
