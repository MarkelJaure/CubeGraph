import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import TimeCardText from "./TimeCardText";
import { getBestAvg } from "../lib/ArrayTimesUtil";
import BestAvgs from "./BestAvgs";

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
        <CardContent style={useStyles.header}>
          <div></div>
          <div>
            <TimeCardText
              playerName={props.playerName}
              keyValue={props.keyValue}
              keyName={props.keyName}
              notifyNewTime={props.notifyNewTime}
              keyLockPlayer={keyLockPlayer}
              timerPlayer={timerPlayer}
            />
          </div>
          <div>
            {props.mode === 0 && (
              <BestAvgs
                bestAvg5={getBestAvg(5, props.listOfTimes)}
                bestAvg12={getBestAvg(12, props.listOfTimes)}
                bestAvg50={getBestAvg(50, props.listOfTimes)}
                bestAvg100={getBestAvg(100, props.listOfTimes)}
              />
            )}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = {
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

export default TimeCard;
