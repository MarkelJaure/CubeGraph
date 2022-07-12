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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ tableLayout: "fixed" }}>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" align="left">
              {props.pbPlayer1 ? (
                <DisplayCubeTime time={props.pbPlayer1} />
              ) : (
                ""
              )}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              PB
            </TableCell>
            <TableCell component="th" scope="row" align="right">
              {props.pbPlayer2 ? (
                <DisplayCubeTime time={props.pbPlayer2} />
              ) : (
                ""
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" align="left">
              {props.mediaPlayer1 ? (
                <DisplayTime time={props.mediaPlayer1} />
              ) : (
                ""
              )}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              Media
            </TableCell>
            <TableCell component="th" scope="row" align="right">
              {props.mediaPlayer2 ? (
                <DisplayTime time={props.mediaPlayer2} />
              ) : (
                ""
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatsComparationTable;
