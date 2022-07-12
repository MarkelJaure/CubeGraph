import React, { useState, useEffect } from "react";
import DisplayTime from "../Number/DisplayTime";
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { getMedia, getPB } from "../Number/ArrayLib";
import DisplayCubeTime from "../Number/DisplayCubeTime";

const StatsComparationTable = (props) => {
  const [pb1, setPb1] = useState(null);
  const [pb2, setPb2] = useState(null);
  const [avg1, setAvg1] = useState(null);
  const [avg2, setAvg2] = useState(null);

  useEffect(() => {
    if (props.timesPlayer1.length > 0) {
      console.log(props.timesPlayer1);
      setPb1(getPB(props.timesPlayer1));
      setAvg1(getMedia(props.timesPlayer1));
      console.log("Actualizando stats player 1");
    }
  }, [props.updateInTimesPlayer1, props.timesPlayer1]);

  useEffect(() => {
    if (props.timesPlayer2.length > 0) {
      setPb2(getPB(props.timesPlayer2));
      setAvg2(getMedia(props.timesPlayer2));
    }
  }, [props.updateInTimesPlayer2, props.timesPlayer2]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ tableLayout: "fixed" }}>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" align="left">
              {pb1 ? <DisplayCubeTime time={pb1} /> : ""}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              PB
            </TableCell>
            <TableCell component="th" scope="row" align="right">
              {pb2 ? <DisplayCubeTime time={pb2} /> : ""}
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
  );
};

export default StatsComparationTable;
