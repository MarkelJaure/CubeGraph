import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DisplayTime from "../Number/DisplayTime";
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import Paper from "@mui/material/Paper";

const StatsComparationCard = (props) => {
  const [pb1, setPb1] = useState(null);
  const [pb2, setPb2] = useState(null);
  const [avg1, setAvg1] = useState(null);
  const [avg2, setAvg2] = useState(null);

  useEffect(() => {
    if (props.timesPlayer1.length > 0) {
      setPb1(Math.min(...props.timesPlayer1.map((item) => item.time)));
      setAvg1(
        Math.trunc(
          props.timesPlayer1.reduce((prev, curr) => prev + curr.time, 0) /
            props.timesPlayer1.length /
            10
        ) * 10
      );
    }
  }, [props.timesPlayer1]);

  useEffect(() => {
    if (props.timesPlayer2.length > 0) {
      setPb2(Math.min(...props.timesPlayer2.map((item) => item.time)));
      setAvg2(
        Math.trunc(
          props.timesPlayer2.reduce((prev, curr) => prev + curr.time, 0) /
            props.timesPlayer2.length /
            10
        ) * 10
      );
    }
  }, [props.timesPlayer2]);

  return (
    <Card
      sx={{ minWidth: 50, maxWidth: 350 }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
          color="text.secondary"
          gutterBottom
        >
          Comparation
        </Typography>
        <Typography variant="h5" component="div">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 70, maxWidth: 350, tableLayout: "fixed" }}>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" align="left">
                    {pb1 ? <DisplayTime time={pb1} /> : ""}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    PB
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {pb2 ? <DisplayTime time={pb2} /> : ""}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" align="left">
                    {avg1 ? <DisplayTime time={avg1} /> : ""}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    Media
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {avg2 ? <DisplayTime time={avg2} /> : ""}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatsComparationCard;
