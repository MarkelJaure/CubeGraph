import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Table, TableContainer, TableBody } from "@mui/material";
import Paper from "@mui/material/Paper";
import SingleCubeTimeRow from "./SingleCubeTimeRow";

const ListCard = (props) => {
  const isTheBestTime = (time) => {
    var bestTime = Math.min(...props.listOfTimes.map((item) => item.time));
    var bestPB = props.listOfTimes.find((aTime) => aTime.time === bestTime);
    return bestPB === time;
  };

  return (
    <Card
      sx={{ width: 9 / 10 }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ width: 1 }}>
        <Typography
          sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
          color="text.secondary"
          gutterBottom
        >
          Times
        </Typography>
        <Typography variant="h5" component="div">
          <TableContainer component={Paper} style={{ maxHeight: "70vh" }}>
            <Table>
              <TableBody>
                {props.listOfTimes
                  .map((time, index) => {
                    return (
                      <SingleCubeTimeRow
                        index={index}
                        time={time}
                        isBestTime={isTheBestTime(time)}
                        deleteTime={props.deleteTime}
                        plus2={props.plus2}
                        dnf={props.dnf}
                      />
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
