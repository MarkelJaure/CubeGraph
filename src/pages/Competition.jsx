import { DashboardLayout } from "../components/navBar/Layout";
import TimeController from "../components/timeController/timeController";
import Stopwatch from "../components/timeController/Timer";
import React from "react";
import { useState, useEffect } from "react";

const KEY_PLAYER_1 = 32;
const KEY_PLAYER_2 = 96;

const Competition = () => {
  const [timerPlayer1, setTimerPlayer1] = useState(false);
  const [keyLockPlayer1, setKeyLockPlayer1] = useState(false);

  const [timerPlayer2, setTimerPlayer2] = useState(false);
  const [keyLockPlayer2, setKeyLockPlayer2] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === KEY_PLAYER_1 && !keyLockPlayer1 && timerPlayer1) {
        setTimerPlayer1(false);
        setKeyLockPlayer1(true);
      }

      if (e.keyCode === KEY_PLAYER_2 && !keyLockPlayer2 && timerPlayer2) {
        setTimerPlayer2(false);
        setKeyLockPlayer2(true);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleandown() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [timerPlayer1, timerPlayer2]);

  useEffect(() => {
    function handleKeyUp(e) {
      if (e.keyCode === KEY_PLAYER_1) {
        if (!keyLockPlayer1) {
          if (!timerPlayer1) {
            setTimerPlayer1(true);
          }
        } else {
          setKeyLockPlayer1(false);
        }
      }

      if (e.keyCode === KEY_PLAYER_2) {
        if (!keyLockPlayer2) {
          if (!timerPlayer2) {
            setTimerPlayer2(true);
          }
        } else {
          setKeyLockPlayer2(false);
        }
      }
    }

    document.addEventListener("keyup", handleKeyUp);

    // Don't forget to clean up
    return function cleandown() {
      document.removeEventListener("keyup", handleKeyUp);
    };
  });
  return (
    <div>
      <DashboardLayout>
        <div
          style={{
            display: "inline-block",
            marginLeft: "20%",
            marginRight: "10%",
            position: "relative",
          }}
        >
          <TimeController isRunning={timerPlayer1} playerName={1} />
        </div>
        <div
          style={{
            display: "inline-block",
            marginRight: "1fr",
            position: "relative",
          }}
        >
          <TimeController isRunning={timerPlayer2} playerName={2} />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Competition;
