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
import DeleteIcon from "@mui/icons-material/Delete";

const ListCard = (props) => {

  const isTheBestTime = (time) => {
    var bestTime = Math.min(...props.listOfTimes.map((item) => item.time))
    var bestPB = props.listOfTimes.find((aTime) => aTime.time === bestTime) 
    return bestPB === time;
  };

  return (
    <Card
      sx={{ 
        minWidth: 50, 
        maxWidth: 400 }}
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
          <TableContainer 
          component={Paper}   
          sx={{
            minHeight: 20 ,
            maxHeight: 400    
          }}>
            <Table sx={{ minWidth: 70, maxWidth: 300, tableLayout: "fixed",height: "max-content"}}>
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
                        <TableCell  align="left" component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell align="right">
                          <DisplayTime time={time.time} />
                        </TableCell>
                        <TableCell align="left" width={"9%"}>
                          {isTheBestTime(time) && (
                            <sup style={style.record}>
                              <b>BT</b>
                            </sup>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            variant="text"
                            onClick={() => props.deleteTime(time)}
                          >
                            <DeleteIcon />
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

const style = {
  record: {
    lineHeight: 1,
    borderRadius: 4,
    backgroundColor: "#00e676",
    padding: 2,
    marginRigth:20,
  },
};

export default ListCard;
