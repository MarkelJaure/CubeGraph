import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import DisplayTime from "../../DisplayTime/DisplayTime";
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
import AnimateOnChange from "react-animate-on-change";

import "../styles.css";

const BestAvg = (props) => (
  <AnimateOnChange
    baseClassName="bestAvg"
    animationClassName="bestAvg-change"
    animate={props.animate}
  >
    <DisplayTime time={props.bestAvg} />
  </AnimateOnChange>
);

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
                  <BestAvg
                    animate={props.animateAvg5}
                    bestAvg={props.bestAvg5}
                  />
                </b>
              </TableCell>
            </TableRow>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableCell}>
                Avg12
              </TableCell>
              <TableCell align="center" style={styles.tableCell}>
                <b>
                  <BestAvg
                    animate={props.animateAvg12}
                    bestAvg={props.bestAvg12}
                  />
                </b>
              </TableCell>
            </TableRow>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableCell}>
                Avg50
              </TableCell>
              <TableCell align="center" style={styles.tableCell}>
                <b>
                  <BestAvg
                    animate={props.animateAvg50}
                    bestAvg={props.bestAvg50}
                  />
                </b>
              </TableCell>
            </TableRow>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableCell}>
                Avg100
              </TableCell>
              <TableCell align="center" style={styles.tableCell}>
                <b>
                  <BestAvg
                    animate={props.animateAvg100}
                    bestAvg={props.bestAvg100}
                  />
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
