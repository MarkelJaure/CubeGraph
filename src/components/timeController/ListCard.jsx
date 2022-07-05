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
import DeleteIcon from "@mui/icons-material/Delete";

const ListCard = (props) => {
  const isTheBestTime = (time) => {
    var bestTime = Math.min(...props.listOfTimes.map((item) => item.time));
    var bestPB = props.listOfTimes.find((aTime) => aTime.time === bestTime);
    return bestPB === time;
  };

  return (
    <Card
      sx={{
        width: 9 / 10,
      }}
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
          Times
        </Typography>
        <Typography variant="h5" component="div">
          <TableContainer component={Paper} style={{ maxHeight: "70vh" }}>
            <Table
              sx={{
                tableLayout: "fixed",
              }}
            >
              <TableBody>
                {props.listOfTimes
                  .map((time, index) => {
                    return (
                      <TableRow
                        key={time.timestamp}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          align="left"
                          component="th"
                          scope="row"
                          width={"5vh"}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell
                          align="left"
                          width={"20vh"}
                          sx={{ fontSize: 14 }}
                        >
                          {getSinceAgo(time.timestamp)}
                        </TableCell>
                        <TableCell align="center" width={"20vh"}>
                          <DisplayTime time={time.time} />
                        </TableCell>
                        <TableCell align="left" width={"20vh"}>
                          {isTheBestTime(time) && (
                            <sup style={style.record}>
                              <b>BT</b>
                            </sup>
                          )}
                        </TableCell>
                        <TableCell align="right" width={"5vh"}>
                          <Button
                            variant="text"
                            onClick={() => props.deleteTime(time)}
                          >
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                  .reverse()}
              </TableBody>
            </Table>
          </TableContainer>
        </Typography>
      </CardContent>
    </Card>
  );
};

const style = {
  record: {
    lineHeight: 1,
    borderRadius: 4,
    backgroundColor: "#00e676",
    padding: 2,
    marginRigth: 20,
  },
};

const getSinceAgo = (timestamp) => {
  var currentTimesamp = Date.now();
  var sinceAgo = currentTimesamp - timestamp;
  var aMinute = 60 * 1000;
  var aHour = 60 * aMinute;
  var aDay = 24 * aHour;
  if (sinceAgo <= aMinute) {
    return "Hace menos de 1 minuto";
  }
  if (sinceAgo <= aHour) {
    return "Hace " + Math.trunc(sinceAgo / aMinute) + " minutos";
  }
  if (sinceAgo <= aDay) {
    return "Hace " + Math.trunc(sinceAgo / aHour) + " horas";
  }
  return "Hace " + Math.trunc(sinceAgo / aDay) + " dias";
};

export default ListCard;
