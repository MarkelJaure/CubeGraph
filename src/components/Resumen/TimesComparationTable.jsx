import React, { useState, useEffect } from "react";
import { Table, TableContainer, TableBody } from "@mui/material";
import Paper from "@mui/material/Paper";
import SingleTimeComparation from "./SingleTimeComparation";

const TimesComparationTable = (props) => {
  return (
    <TableContainer component={Paper} style={{ maxHeight: "50vh" }}>
      <Table
        sx={{
          tableLayout: "fixed",
          height: "max-content",
          minWidth: 180,
          whiteSpace: "nowrap",
        }}
        size="small"
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
