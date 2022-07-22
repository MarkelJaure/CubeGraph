import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import DisplayTime from "../DisplayTime/DisplayTime";
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  IconButton,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";

const BestAvgs = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography sx={styles.text} color="text.secondary">
        {t("Bests")}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={styles.table} size="small">
          <TableBody>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableCell}>
                Avg5
              </TableCell>
              <TableCell align="center" style={styles.tableCell}>
                <b>
                  <DisplayTime time={props.bestAvg5}></DisplayTime>
                </b>
              </TableCell>
            </TableRow>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableCell}>
                Avg12
              </TableCell>
              <TableCell align="center" style={styles.tableCell}>
                <b>
                  <DisplayTime time={props.bestAvg12}></DisplayTime>
                </b>
              </TableCell>
            </TableRow>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableCell}>
                Avg50
              </TableCell>
              <TableCell align="center" style={styles.tableCell}>
                <b>
                  <DisplayTime time={props.bestAvg50}></DisplayTime>
                </b>
              </TableCell>
            </TableRow>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableCell}>
                Avg100
              </TableCell>
              <TableCell align="center" style={styles.tableCell}>
                <b>
                  <DisplayTime time={props.bestAvg100}></DisplayTime>
                </b>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const styles = {
  text: {
    marginTop: -2,
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
  },
  table: {
    tableLayout: "fixed",
  },
  tableRow: {
    height: 29,
  },
  tableCell: {
    padding: "0px",
  },
};

export default BestAvgs;
