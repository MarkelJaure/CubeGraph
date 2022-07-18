import React, { useState, useEffect } from "react";
import { TableCell, TableRow } from "@mui/material";
import DisplayCubeTime from "../DisplayTime/DisplayCubeTime";
import { comparationOfTime } from "../lib/ArrayTimesUtil";

const SingleTimeComparation = (props) => {
  const [comparation, setComparation] = useState(0);

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
              ? comparationOfTime(props.time1, props.time2) >= 0
                ? comparationOfTime(props.time1, props.time2) === 1
                  ? "green"
                  : "gray"
                : "red"
              : "black",
        }}
      >
        {props.time1 && <DisplayCubeTime time={props.time1} />}
      </TableCell>

      <TableCell align="center">
        {props.time2 && props.time1
          ? comparationOfTime(props.time1, props.time2) >= 0
            ? comparationOfTime(props.time1, props.time2) === 1
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
              ? comparationOfTime(props.time1, props.time2) >= 0
                ? comparationOfTime(props.time1, props.time2) === 1
                  ? "red"
                  : "gray"
                : "green"
              : "black",
        }}
      >
        {props.time2 && <DisplayCubeTime time={props.time2} />}
      </TableCell>
    </TableRow>
  );
};

export default SingleTimeComparation;
