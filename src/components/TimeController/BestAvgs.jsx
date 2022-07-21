import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import DisplayTime from "../DisplayTime/DisplayTime";

const BestAvgs = (props) => {
  return (
    <>
      <Typography
        align="center"
        style={{ minWidth: "60px" }}
        sx={{ fontSize: 13 }}
      >
        Avg5:{" "}
        <b>
          <DisplayTime time={props.bestAvg5}></DisplayTime>
        </b>
      </Typography>
      <Typography
        align="center"
        style={{ minWidth: "60px" }}
        sx={{ fontSize: 13 }}
      >
        Avg12:{" "}
        <b>
          <DisplayTime time={props.bestAvg12}></DisplayTime>
        </b>
      </Typography>
      <Typography
        align="center"
        style={{ minWidth: "60px" }}
        sx={{ fontSize: 13 }}
      >
        Avg50:{" "}
        <b>
          <DisplayTime time={props.bestAvg50}></DisplayTime>
        </b>
      </Typography>
      <Typography
        align="center"
        style={{ minWidth: "60px" }}
        sx={{ fontSize: 13 }}
      >
        Avg100:{" "}
        <b>
          <DisplayTime time={props.bestAvg100}></DisplayTime>
        </b>
      </Typography>
    </>
  );
};

export default BestAvgs;
