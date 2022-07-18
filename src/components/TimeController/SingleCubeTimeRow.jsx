import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DisplayCubeTime from "../DisplayTime/DisplayCubeTime";

const SingleCubeTimeRow = (props) => {
  return (
    <TableRow key={props.time.timestamp} style={{ height: "10px" }}>
      <TableCell align="left" width={"5%"}>
        <b>{props.index + 1}</b>
      </TableCell>
      {/* <TableCell
        align="left"
        sx={{
          fontSize: 14,
          maxWidth: 0,
          overflow: "hidden",
          textOverflow: "hidden",
          whiteSpace: "nowrap",
        }}
        width={"5%"}
      >
        Holaaa
      </TableCell> */}
      <TableCell align="center" width={"10%"}>
        <DisplayCubeTime time={props.time} />
      </TableCell>

      <TableCell align="left" width={"5%"}>
        {props.isBestTime && (
          <sup style={style.record}>
            <b>BT</b>
          </sup>
        )}
      </TableCell>
      <TableCell align="center" width={"8%"}>
        <Button
          style={{
            backgroundColor: props.time.plus2 ? "#3b82f64d" : "white",
            minWidth: "30px",
            minHeight: "30px",
          }}
          onClick={() => props.plus2(props.time)}
        >
          +2
        </Button>
      </TableCell>
      <TableCell align="center" width={"10%"}>
        <Button
          style={{
            backgroundColor: props.time.dnf ? "#3b82f64d" : "white",
            minWidth: "30px",
            minHeight: "30px",
          }}
          variant="text"
          onClick={() => props.dnf(props.time)}
        >
          DNF
        </Button>
      </TableCell>
      <TableCell align="center" width={"10%"}>
        <Button
          variant="text"
          onClick={() => props.deleteTime(props.time)}
          style={{
            minWidth: "30px",
            minHeight: "30px",
          }}
        >
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

const style = {
  record: {
    lineHeight: 1,
    borderRadius: 4,
    backgroundColor: "#00e676",
    padding: 2,
  },
};

export default SingleCubeTimeRow;
