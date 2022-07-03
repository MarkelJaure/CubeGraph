import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stopwatch from "./Stopwatch";

const TimeCard = (props) => {
  const [timerPlayer, setTimerPlayer] = useState(false);
  const [keyLockPlayer, setKeyLockPlayer] = useState(false);

  const returnTime = (time) => {
    if (props.notifyNewTime) {
      props.notifyNewTime(time);
    }
  };

  function handleKeyDown(e) {
    if (e.keyCode === props.keyValue && !keyLockPlayer && timerPlayer) {
      setTimerPlayer(false);
      setKeyLockPlayer(true);
    }
  }

  function handleKeyUp(e) {
    if (e.keyCode === props.keyValue) {
      if (!keyLockPlayer) {
          setTimerPlayer(true);
      } else {
        setKeyLockPlayer(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleandown() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyLockPlayer, timerPlayer]);

  useEffect(() => {

    document.addEventListener("keyup", handleKeyUp);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyLockPlayer, timerPlayer]);

  return (
    <Card
      sx={{ minWidth: 50, maxWidth: 400 }}
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
          <Stopwatch isRunning={timerPlayer} parentCallback={returnTime} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TimeCard;
