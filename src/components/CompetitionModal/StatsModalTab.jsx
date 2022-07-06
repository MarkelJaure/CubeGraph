import React, { useState, useEffect } from "react";
import DisplayTime from "../Number/DisplayTime";
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { getMedia, getPB, getRoundsWin } from "../Number/ArrayLib";

const StatsModalTab = (props) => {
  const [pb1, setPb1] = useState(null);
  const [pb2, setPb2] = useState(null);
  const [avg1, setAvg1] = useState(null);
  const [avg2, setAvg2] = useState(null);
  const [roundsWinPlayer1, setRoundsWinPlayer1] = useState(null);
  const [roundsWinPlayer2, setRoundsWinPlayer2] = useState(null);

  useEffect(() => {
    if (props.timesPlayer1.length > 0) {
      setPb1(getPB(props.timesPlayer1).time);
      setAvg1(getMedia(props.timesPlayer1));
      setRoundsWinPlayer1(getRoundsWin(props.timesPlayer1, props.timesPlayer2));
    }

    if (props.timesPlayer2.length > 0) {
      setPb2(getPB(props.timesPlayer2).time);
      setAvg2(getMedia(props.timesPlayer2));
      setRoundsWinPlayer2(getRoundsWin(props.timesPlayer2, props.timesPlayer1));
    }
  }, [props.timesPlayer1, props.timesPlayer2]);

  return (
    <>
      <TableContainer component={Paper} style={{ maxHeight: "50vh" }}>
        <Table
          sx={{
            tableLayout: "fixed",
            height: "max-content",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>{props.playerName1}</b>
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="center">
                <b>{props.playerName2}</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{
                  color:
                    pb1 && pb2
                      ? pb2 >= pb1
                        ? pb2 > pb1
                          ? "green"
                          : "gray"
                        : "red"
                      : "black",
                }}
              >
                {pb1 ? <DisplayTime time={pb1} /> : ""}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                PB
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{
                  color:
                    pb1 && pb2
                      ? pb2 <= pb1
                        ? pb2 < pb1
                          ? "green"
                          : "gray"
                        : "red"
                      : "black",
                }}
              >
                {pb2 ? <DisplayTime time={pb2} /> : ""}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{
                  color:
                    avg1 && avg2
                      ? avg2 >= avg1
                        ? avg2 > avg1
                          ? "green"
                          : "gray"
                        : "red"
                      : "black",
                }}
              >
                {avg1 ? <DisplayTime time={avg1} /> : ""}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                Media
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{
                  color:
                    avg1 && avg2
                      ? avg2 <= avg1
                        ? avg2 < avg1
                          ? "green"
                          : "gray"
                        : "red"
                      : "black",
                }}
              >
                {avg2 ? <DisplayTime time={avg2} /> : ""}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{
                  color:
                    avg1 && avg2
                      ? avg2 >= avg1
                        ? avg2 > avg1
                          ? "green"
                          : "gray"
                        : "red"
                      : "black",
                }}
              >
                {avg1 && avg2 && avg1 < avg2 && "- "}
                {avg1 && avg2 && avg2 < avg1 && "+ "}
                {avg1 && avg2 && (
                  <DisplayTime time={Math.abs(avg1 - avg2)}></DisplayTime>
                )}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                Difference
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{
                  color:
                    avg1 && avg2
                      ? avg2 <= avg1
                        ? avg2 < avg1
                          ? "green"
                          : "gray"
                        : "red"
                      : "black",
                }}
              >
                {avg1 && avg2 && avg1 < avg2 && "+ "}
                {avg1 && avg2 && avg2 < avg1 && "- "}
                {avg1 && avg2 && (
                  <DisplayTime time={Math.abs(avg1 - avg2)}></DisplayTime>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{
                  color:
                    roundsWinPlayer2 <= roundsWinPlayer1
                      ? roundsWinPlayer2 < roundsWinPlayer1
                        ? "green"
                        : "gray"
                      : "red",
                }}
              >
                {roundsWinPlayer1}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                Rounds Win
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{
                  color:
                    roundsWinPlayer2 >= roundsWinPlayer1
                      ? roundsWinPlayer2 > roundsWinPlayer1
                        ? "green"
                        : "gray"
                      : "red",
                }}
              >
                {roundsWinPlayer2}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StatsModalTab;
