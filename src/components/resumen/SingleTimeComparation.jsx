import React, { useState, useEffect } from "react";
import DisplayTime from "../Number/DisplayTime";
import { TableCell, TableRow } from "@mui/material";

const SingleTimeComparation = (props) => {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell
        align="left"
        style={{
          color:
            props.time2 && props.time1
              ? props.time2.time >= props.time1.time
                ? props.time2.time > props.time1.time
                  ? "green"
                  : "gray"
                : "red"
              : "black",
        }}
      >
        {props.time1 && <DisplayTime time={props.time1.time} />}
      </TableCell>

      <TableCell align="center">
        {props.time2 && props.time1
          ? props.time2.time >= props.time1.time
            ? props.time2.time > props.time1.time
              ? props.playerName1
              : "Draw"
            : props.playerName2
          : "..."}
      </TableCell>
      <TableCell
        align="right"
        style={{
          color:
            props.time2 && props.time1
              ? props.time2.time >= props.time1.time
                ? props.time2.time > props.time1.time
                  ? "red"
                  : "gray"
                : "green"
              : "black",
        }}
      >
        {props.time2 && <DisplayTime time={props.time2.time} />}
      </TableCell>
    </TableRow>
  );
};

export default SingleTimeComparation;
