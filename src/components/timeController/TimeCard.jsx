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
    console.log("Key Down");
    if (e.keyCode === props.keyValue && !keyLockPlayer && timerPlayer) {
      setTimerPlayer(false);
      setKeyLockPlayer(true);
      console.log("Desactivando timer");
    }
  }

  function handleKeyUp(e) {
    console.log("Key Up");
    if (e.keyCode === props.keyValue) {
      if (!keyLockPlayer) {
        setTimerPlayer(true);
        console.log("Activando timer");
      } else {
        setKeyLockPlayer(false);
      }
    }
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
        height: 100,
      }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
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
    </Card>
  );
};

export default TimeCard;
