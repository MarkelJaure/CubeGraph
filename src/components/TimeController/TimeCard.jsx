import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import TimeCardText from "./TimeCardText";
import { getBestAvg, getCurrAvg } from "../lib/ArrayTimesUtil";
import BestAvgs from "./BestAvgs";
import { PRACTICE_MODE } from "../lib/Constants";

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
    <Card sx={useStyles.card}>
      <CardActionArea
        onMouseDown={() => handleMouseDownListener()}
        onMouseUp={() => handleMouseUpListener()}
      >
        <CardContent style={useStyles.header}>
          <div style={useStyles.flexComponent}></div>
          <div style={useStyles.flexComponent}>
            <TimeCardText
              playerName={props.playerName}
              keyValue={props.keyValue}
              keyName={props.keyName}
              notifyNewTime={props.notifyNewTime}
              keyLockPlayer={keyLockPlayer}
              timerPlayer={timerPlayer}
            />
          </div>
          <div style={useStyles.flexComponent}>
            {props.mode === PRACTICE_MODE && (
              <BestAvgs
                bestAvg5={getBestAvg(5, props.listOfTimes)}
                animateAvg5={animateBestAvg(5, props.listOfTimes, timerPlayer)}
                bestAvg12={getBestAvg(12, props.listOfTimes)}
                animateAvg12={animateBestAvg(
                  12,
                  props.listOfTimes,
                  timerPlayer
                )}
                bestAvg50={getBestAvg(50, props.listOfTimes)}
                animateAvg50={animateBestAvg(
                  50,
                  props.listOfTimes,
                  timerPlayer
                )}
                bestAvg100={getBestAvg(100, props.listOfTimes)}
                animateAvg100={animateBestAvg(
                  100,
                  props.listOfTimes,
                  timerPlayer
                )}
              />
            )}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = {
  card: {
    width: 9 / 10,
    height: "150px",
    display: "flex",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  flexComponent: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
};

function animateBestAvg(aNumber, listOfTimes, timerPlayer) {
  return (
    getCurrAvg(aNumber, listOfTimes) <
      getBestAvg(aNumber, listOfTimes.slice(0, listOfTimes.length - 1)) &&
    !timerPlayer
  );
}

export default TimeCard;
