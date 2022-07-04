import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TimesComparationTable from "./TimesComparationTable";

const TimesComparationCard = (props) => {
  return (
    <Card
      sx={{ minWidth: 50, maxWidth: 350 }}
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
          <TimesComparationTable
            timesPlayer1={props.timesPlayer1}
            timesPlayer2={props.timesPlayer2}
            playerName1={props.playerName1}
            playerName2={props.playerName2}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TimesComparationCard;
