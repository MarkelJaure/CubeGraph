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
import StatsComparationCard from "./StatsComparationCard";
import SingleTimeComparation from "./SingleTimeComparation";

const TimesComparationCard = (props) => {
  useEffect(() => {}, [props.timesPlayer1, props.timesPlayer2]);

  return (
    <Card
      sx={{ minWidth: 50, maxWidth: 350 }}
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
          <TableContainer component={Paper}
                    sx={{
            minHeight: 20 ,
            maxHeight: 330,    
          }}>
            <Table sx={{ minWidth: 70, maxWidth: 350, tableLayout: "fixed", height: "max-content" }}>
              <TableBody>
                {props.timesPlayer1 >= props.timesPlayer2 &&
                  props.timesPlayer1
                    .map((time, index) => {
                      return (
                        <SingleTimeComparation
                          time1={time}
                          time2={props.timesPlayer2[index]}
                          playerName1={props.playerName1}
                          playerName2={props.playerName2}
                        />
                      );
                    })
                    .reverse()}
                {props.timesPlayer2 > props.timesPlayer1 &&
                  props.timesPlayer2
                    .map((time, index) => {
                      return (
                        <SingleTimeComparation
                          time1={props.timesPlayer1[index]}
                          time2={time}
                          playerName1={props.playerName1}
                          playerName2={props.playerName2}
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

export default TimesComparationCard;
