import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stopwatch from "./Timer";

export default function TimeController(props) {
  const [timerPlayer, setTimerPlayer] = useState(false);
  const [keyLockPlayer, setKeyLockPlayer] = useState(false);

  const [listOfTimes, setListOfTimes] = useState([]);

  const addToList = (childData) => {
    var tmpList = listOfTimes;
    tmpList.push({ time: childData, timestamp: Date.now() });
    setListOfTimes(tmpList);
    console.log(listOfTimes);
  };

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === props.keyValue && !keyLockPlayer && timerPlayer) {
        setTimerPlayer(false);
        setKeyLockPlayer(true);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleandown() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyLockPlayer, props.keyValue, timerPlayer]);

  useEffect(() => {
    function handleKeyUp(e) {
      if (e.keyCode === props.keyValue) {
        if (!keyLockPlayer) {
          if (!timerPlayer) {
            setTimerPlayer(true);
          }
        } else {
          setKeyLockPlayer(false);
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
    <>
      <Card
        sx={{ minWidth: 275, maxWidth: 275 }}
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
            <Stopwatch isRunning={timerPlayer} parentCallback={addToList} />
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{ minWidth: 275, maxWidth: 275 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
            color="text.secondary"
            gutterBottom
          >
            Times
          </Typography>
          <Typography variant="h5" component="div">
            <table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                {listOfTimes.map((time) => {
                  return (
                    <tr key={time.timestamp}>
                      <td>
                        <Typography>
                          <span>
                            {("0" + Math.floor((time.time / 60000) % 60)).slice(
                              -2
                            )}
                            :
                          </span>
                          <span>
                            {("0" + Math.floor((time.time / 1000) % 60)).slice(
                              -2
                            )}
                            :
                          </span>
                          <span>
                            {("0" + ((time.time / 10) % 100)).slice(-2)}
                          </span>
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
