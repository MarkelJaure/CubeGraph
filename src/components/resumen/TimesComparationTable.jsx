import React, { useState, useEffect } from "react";
import { Table, TableContainer, TableBody } from "@mui/material";
import Paper from "@mui/material/Paper";
import SingleTimeComparation from "./SingleTimeComparation";

const TimesComparationTable = (props) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        minHeight: 20,
        maxHeight: 270,
      }}
    >
      <Table
        sx={{
          minWidth: 70,
          maxWidth: 350,
          tableLayout: "fixed",
          height: "max-content",
        }}
      >
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
  );
};

export default TimesComparationTable;
