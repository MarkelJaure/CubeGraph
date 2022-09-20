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
  TableHead,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import AnimateOnChange from "react-animate-on-change";

import "../../speedCubeTimes/styles.css";
import DisplayCubeTime from "../../DisplayTime/DisplayCubeTime";

const BestAvg = (props) => (
  <AnimateOnChange
    baseClassName="bestAvg"
    animationClassName="bestAvg-change"
    animate={props.animate}
  >
    <DisplayTime time={props.bestAvg} />
  </AnimateOnChange>
);

const ActualAndBestAvgs = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={styles.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center"> {t("Actual")}</TableCell>
              <TableCell align="center"> {t("Best")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableCell}>
                Avg5
              </TableCell>
              <TableCell align="center" style={styles.tableCell}>
                <b>
                  <DisplayTime time={props.actualAvg5} />
                </b>
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
                  <DisplayTime time={props.actualAvg12} />
                </b>
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
                  <DisplayTime time={props.actualAvg50} />
                </b>
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
                  <DisplayTime time={props.actualAvg100} />
                </b>
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

        <Table>
          <TableBody>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableCell} width="33%">
                PB
              </TableCell>
              <TableCell align="center" style={styles.tableCell} width="66%">
                <b>
                  <AnimateOnChange
                    baseClassName="pb"
                    animationClassName="bestPb-change"
                    animate={props.animatePb}
                  >
                    <DisplayCubeTime time={props.pb}></DisplayCubeTime>
                  </AnimateOnChange>
                </b>
              </TableCell>
            </TableRow>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableCell} width="33%">
                Media
              </TableCell>
              <TableCell align="center" style={styles.tableCell} width="66%">
                <b>
                  <BestAvg animate={props.animateMedia} bestAvg={props.media} />
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
    justifyContent: "center",
  },
  tableRow: {
    height: 29,
  },
  tableCell: {
    padding: "0px",
  },
};

export default ActualAndBestAvgs;
