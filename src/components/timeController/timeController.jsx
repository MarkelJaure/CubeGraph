import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stopwatch from "./Timer";
import DisplayTime from "../Number/DisplayTime";
import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Icon from "awesome-react-icons";

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

  const handleDeleteTime = (time) => {
    if (listOfTimes.includes(time)) {
      setListOfTimes(listOfTimes.filter((aTime) => aTime !== time));
    }
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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 275, tableLayout: "fixed" }}>
                <TableBody>
                  {listOfTimes
                    .map((time, index) => {
                      return (
                        <TableRow
                          key={time.timestamp}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell>
                            <DisplayTime time={time.time} />
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              variant="text"
                              onClick={() => handleDeleteTime(time)}
                            >
                              <Icon name="minus" className="w-6 h-6" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })
                    .reverse()}
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
