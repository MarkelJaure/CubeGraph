import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stopwatch from "./Stopwatch";
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

const ListCard = (props) => {
  return (
    <Card
      sx={{ minWidth: 50, maxWidth: 400 }}
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
              <TableBody>
                {props.listOfTimes
                  .map((time, index) => {
                    return (
                      <TableRow
                        key={time.timestamp}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell>
                          <DisplayTime time={time.time} />
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            variant="text"
                            onClick={() => props.deleteTime(time)}
                          >
                            <Icon name="minus" className="w-6 h-6" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                  .reverse()}
              </TableBody>
            </Table>
          </TableContainer>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ListCard;
