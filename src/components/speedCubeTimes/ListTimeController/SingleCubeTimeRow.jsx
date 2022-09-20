import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DisplayCubeTime from "../../DisplayTime/DisplayCubeTime";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const SingleCubeTimeRow = (props) => {
  const { t } = useTranslation();

  return (
    <TableRow key={props.time.timestamp} style={styles.tableRow}>
      <TableCell align="left" width={"5%"} style={styles.tableCell}>
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
      <TableCell align="center" width={"10%"} style={styles.tableCell}>
        <DisplayCubeTime time={props.time} />
      </TableCell>

      <TableCell align="left" width={"5%"} style={styles.tableCell}>
        {props.isBestTime && (
          <sup style={styles.record}>
            <b>PB</b>
          </sup>
        )}
      </TableCell>
      <TableCell align="center" width={"8%"} style={styles.tableCell}>
        <Tooltip title={t("Plus2Tooltip")} placement="bottom">
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
        </Tooltip>
      </TableCell>
      <TableCell align="center" width={"10%"} style={styles.tableCell}>
        <Tooltip title={t("DNFTooltip")} placement="bottom">
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
        </Tooltip>
      </TableCell>
      <TableCell align="center" width={"10%"} style={styles.tableCell}>
        <Tooltip title={t("DeleteTooltip")} placement="bottom">
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
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

const styles = {
  record: {
    lineHeight: 1,
    borderRadius: 4,
    backgroundColor: "#00e676",
    padding: 2,
  },
  tableRow: {
    height: 29,
  },
  tableCell: {
    padding: "4px 12px",
  },
};

export default SingleCubeTimeRow;
