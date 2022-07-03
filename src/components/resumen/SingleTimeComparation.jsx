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
              ? "Player " + props.playerName1
              : "Draw"
            : "Player " + props.playerName2
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
