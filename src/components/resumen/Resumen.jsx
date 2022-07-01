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

const Resumen = (props) => {
  return (
    <>
      <Card
        sx={{ minWidth: 50, maxWidth: 300 }}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
            color="text.secondary"
            gutterBottom
          >
            Comparacion
          </Typography>
          <Typography variant="h5" component="div">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 70, maxWidth: 300, tableLayout: "fixed" }}>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" align="left">
                      Pb 1
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      Pb 2
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" align="left">
                      Media 1
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      Media 2
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{ minWidth: 50, maxWidth: 300 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
            color="text.secondary"
            gutterBottom
          >
            Times
          </Typography>
          <Typography variant="h5" component="div">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 70, maxWidth: 300, tableLayout: "fixed" }}>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Resumen;
