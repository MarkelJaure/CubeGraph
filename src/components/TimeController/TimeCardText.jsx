import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Stopwatch from "./Stopwatch";
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
        sx={sx.secondaryText}
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
        sx={sx.secondaryText}
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

const sx={
  secondaryText:{
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
  }
}

export default TimeCardText;
