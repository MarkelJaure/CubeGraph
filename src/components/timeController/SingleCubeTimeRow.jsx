import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DisplayCubeTime from "../Number/DisplayCubeTime";

const SingleCubeTimeRow = (props) => {
  return (
    <TableRow
      key={props.time.timestamp}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell align="left" width={"40%"}>
        {props.index + 1}
      </TableCell>
      {/* <TableCell align="left" sx={{ fontSize: 14 }}>
                          {getSinceAgo(time.timestamp)}
                        </TableCell> */}
      <TableCell align="center" width={"20%"}>
        <DisplayCubeTime time={props.time} />
      </TableCell>
      <TableCell align="left" width={"10%"}>
        {props.isBestTime && (
          <sup style={style.record}>
            <b>BT</b>
          </sup>
        )}
      </TableCell>
      <TableCell align="center" width={"10%"}>
        <Button
          variant="text"
          style={{
            backgroundColor: props.time.plus2 ? "#3b82f64d" : "white",
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
          }}
          variant="text"
          onClick={() => props.dnf(props.time)}
        >
          DNF
        </Button>
      </TableCell>
      <TableCell align="center" width={"10%"}>
        <Button variant="text" onClick={() => props.deleteTime(props.time)}>
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
    marginRigth: 20,
  },
};

export default SingleCubeTimeRow;
