import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DisplayTime from "../Number/DisplayTime";
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Icon from "awesome-react-icons";

const Resumen = (props) => {
  const [pb1, setPb1] = useState(null);
  const [pb2, setPb2] = useState(null);
  const [avg1, setAvg1] = useState(null);
  const [avg2, setAvg2] = useState(null);

  useEffect(() => {
    console.log("Llegue a la funcion final");
    if (props.timesPlayer1.length !== 0) {
      // setPb1(
      //   props.timesPlayer1.reduce(function (prev, curr) {
      //     return prev.time < curr.time ? prev.time : curr.time;
      //   })
      // );
      // console.log("Llegue a la funcion final");
      // setAvg1(
      //   props.timesPlayer1.reduce((prev, curr) => prev + curr.time, 0) /
      //     props.timesPlayer1.length
      // );
    }
  }, [props.timesPlayer1]);

  return (
    <>
      <Card
        sx={{ minWidth: 50, maxWidth: 300 }}
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
            Comparacion
          </Typography>
          <Typography variant="h5" component="div">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 70, maxWidth: 300, tableLayout: "fixed" }}>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" align="left">
                      Pb {props.playerName1}: {pb1 ? pb1 : ""}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      Pb {props.playerName2}: {pb2 ? pb2 : ""}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" align="left">
                      Media {props.playerName1}: {avg1 ? avg1 : ""}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      Media {props.playerName2}: {avg2 ? avg2 : ""}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{ minWidth: 50, maxWidth: 300 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
            color="text.secondary"
            gutterBottom
          >
            Times
          </Typography>
          <Typography variant="h5" component="div">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 70, maxWidth: 300, tableLayout: "fixed" }}>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Resumen;
