import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stopwatch from "./Stopwatch";
import { CardActionArea } from "@mui/material";

const TimeCard = (props) => {
  const [timerPlayer, setTimerPlayer] = useState(false);
  const [keyLockPlayer, setKeyLockPlayer] = useState(false);

  const stopTimer = () => {
    if (!keyLockPlayer && timerPlayer) {
      setKeyLockPlayer(true);
      setTimerPlayer(false);
    }
  };

  const startTimer = () => {
    if (!keyLockPlayer) {
      setTimerPlayer(true);
    } else {
      setKeyLockPlayer(false);
    }
  };

  const returnTime = (time) => {
    if (props.notifyNewTime) {
      props.notifyNewTime(time);
    }
  };

  function handleKeyDown(e) {
    if (e.keyCode === props.keyValue) {
      stopTimer();
    }
  }

  function handleKeyUp(e) {
    if (e.keyCode === props.keyValue) {
      startTimer();
    }
  }

  function handleMouseDownListener() {
    stopTimer();
  }

  function handleMouseUpListener() {
    startTimer();
  }

  useEffect(() => {
    //TODO: si se tapea muy rapido cuando el reloj esta corriendo, se frena y vuelve a arrancar sin esperar la actualizacion de keyLock
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Don't forget to clean up
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyLockPlayer, timerPlayer]);

  return (
    <Card
      sx={{
        width: 9 / 10,
        height: "20vh",
        maxHeight: "100px",
        minHeight: "100px",
      }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardActionArea
        onMouseDown={() => handleMouseDownListener()}
        onMouseUp={() => handleMouseUpListener()}
      >
        <CardContent>
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
            <Stopwatch isRunning={timerPlayer} parentCallback={returnTime} />
          </Typography>
          <Typography
            sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
            //style={{marginTop:2}}
            color="text.secondary"
          >
            {!timerPlayer
              ? `Hold [${props.keyName}] to start`
              : `Press [${props.keyName}] to stop`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TimeCard;
