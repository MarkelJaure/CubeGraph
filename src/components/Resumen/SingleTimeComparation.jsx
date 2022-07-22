import React, { useState, useEffect } from "react";
import { TableCell, TableRow } from "@mui/material";
import DisplayCubeTime from "../DisplayTime/DisplayCubeTime";
import { comparationOfTime } from "../lib/SingleTimeUtil";
import { useTranslation } from "react-i18next";

const SingleTimeComparation = (props) => {
  const { t } = useTranslation();

  return (
    <TableRow sx={styles.tableRow}>
      <TableCell align="left" style={styles.time1}>
        {props.time1 && <DisplayCubeTime time={props.time1} />}
      </TableCell>

      <TableCell align="center">
        {props.time2 && props.time1
          ? comparationOfTime(props.time1, props.time2) >= 0
            ? comparationOfTime(props.time1, props.time2) === 1
              ? props.playerName1
              : t("Draw")
            : props.playerName2
          : "..."}
      </TableCell>
      <TableCell align="right" style={styles.time2}>
        {props.time2 && <DisplayCubeTime time={props.time2} />}
      </TableCell>
    </TableRow>
  );
};

const styles = {
  tableRow: {
    "&:last-child td, &:last-child th": { border: 0 },
  },
  time1: {
    color:
      this.props.time2 && this.props.time1
        ? comparationOfTime(this.props.time1, this.props.time2) >= 0
          ? comparationOfTime(this.props.time1, this.props.time2) === 1
            ? "green"
            : "gray"
          : "red"
        : "black",
  },
  time2: {
    color:
      this.props.time2 && this.props.time1
        ? comparationOfTime(this.props.time1, this.props.time2) >= 0
          ? comparationOfTime(this.props.time1, this.props.time2) === 1
            ? "red"
            : "gray"
          : "green"
        : "black",
  },
};

export default SingleTimeComparation;
