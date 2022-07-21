import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stopwatch from "./Stopwatch";
import { CardActionArea } from "@mui/material";
import { useTranslation } from "react-i18next";

const TimeCardText = (props) => {
  const { t } = useTranslation();

  const returnTime = (time) => {
    if (props.notifyNewTime) {
      props.notifyNewTime(time);
    }
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: "14px",
          display: "flex",
          justifyContent: "center",
        }}
        color="text.secondary"
      >
        {props.playerName}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stopwatch isRunning={props.timerPlayer} parentCallback={returnTime} />
      </Typography>
      <Typography
        sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
        //style={{marginTop:2}}
        color="text.secondary"
      >
        {!props.timerPlayer
          ? `${t("Hold")} [${props.keyName}] ${t("to start")}`
          : `${t("Press")} [${props.keyName}] ${t("to stop")}`}
      </Typography>
    </>
  );
};

export default TimeCardText;
