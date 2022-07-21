import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stopwatch from "./Stopwatch";
import { CardActionArea } from "@mui/material";
import { useTranslation } from "react-i18next";
import TimeCardText from "./TimeCardText";
import DisplayCubeTime from "../DisplayTime/DisplayCubeTime";
import DisplayTime from "../DisplayTime/DisplayTime";
import { getBestAvg } from "../lib/ArrayTimesUtil";

const TimeCard = (props) => {
  const { t } = useTranslation();

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
            <Typography
              align="center"
              style={{ minWidth: "60px" }}
              sx={{ fontSize: 13 }}
            >
              Avg5:{" "}
              <b>
                <DisplayTime
                  time={getBestAvg(5, props.listOfTimes)}
                ></DisplayTime>
              </b>
            </Typography>
            <Typography
              align="center"
              style={{ minWidth: "60px" }}
              sx={{ fontSize: 13 }}
            >
              Avg12:{" "}
              <b>
                <DisplayTime
                  time={getBestAvg(12, props.listOfTimes)}
                ></DisplayTime>
              </b>
            </Typography>
            <Typography
              align="center"
              style={{ minWidth: "60px" }}
              sx={{ fontSize: 13 }}
            >
              Avg50:{" "}
              <b>
                <DisplayTime
                  time={getBestAvg(50, props.listOfTimes)}
                ></DisplayTime>
              </b>
            </Typography>
            <Typography
              align="center"
              style={{ minWidth: "60px" }}
              sx={{ fontSize: 13 }}
            >
              Avg100:{" "}
              <b>
                <DisplayTime
                  time={getBestAvg(100, props.listOfTimes)}
                ></DisplayTime>
              </b>
            </Typography>
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
