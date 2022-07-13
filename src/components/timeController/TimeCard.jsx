import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stopwatch from "./Stopwatch";
import { CardActionArea } from "@mui/material";

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
      console.log("DesactivandoTimer timer");
      console.log("===============");
      console.log("Tecla lockeada (deberia ser false):" + keyLockPlayer);
      console.log("timer player  (deberia ser true):" + timerPlayer);
      console.log("===============");
      setTimerPlayer(false);
      setKeyLockPlayer(true);
    }
  }

  function handleKeyUp(e) {
    if (e.keyCode === props.keyValue) {
      if (!keyLockPlayer) {
        console.log("===============");
        console.log("Tecla lockeada (deberia ser true):" + keyLockPlayer);
        console.log("===============");
        setTimerPlayer(true);
      } else {
        setKeyLockPlayer(false);
      }
    }
  }

  function handleMouseDownListener() {
    if (!keyLockPlayer && timerPlayer) {
      console.log("DesactivandoTimer timer");
      console.log("===============");
      console.log("Tecla lockeada (deberia ser false):" + keyLockPlayer);
      console.log("timer player  (deberia ser true):" + timerPlayer);
      console.log("===============");
      setTimerPlayer(false);
      setKeyLockPlayer(true);
    }
  }

  function handleMouseUpListener() {
    if (!keyLockPlayer) {
      console.log("Activando timer");
      console.log("===============");
      console.log("Tecla lockeada (deberia ser false):" + keyLockPlayer);
      console.log("===============");
      setTimerPlayer(true);
    } else {
      console.log("===============");
      console.log("Tecla lockeada (deberia ser true):" + keyLockPlayer);
      console.log("===============");
      setKeyLockPlayer(false);
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
      <CardActionArea
        onMouseDown={() => handleMouseDownListener()}
        onMouseUp={() => handleMouseUpListener()}
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
      </CardActionArea>
    </Card>
  );
};

export default TimeCard;
