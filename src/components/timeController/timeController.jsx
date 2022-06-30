import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stopwatch from "./Timer";

export default function TimeController(props) {
  return (
    <Card
      sx={{ minWidth: 275, maxWidth: 275 }}
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
          Player {props.playerName}
        </Typography>
        <Typography variant="h5" component="div">
          <Stopwatch isRunning={props.isRunning} />
        </Typography>
      </CardContent>
    </Card>
  );
}
