import React, { useState, useEffect } from "react";
import TimeCard from "./TimeCard";
import ListCard from "./ListCard";
import PracticeBarCard from "./PracticeBarCard";
import {
  getCurrAvg,
  getMedia,
  getPB,
  getRandomScramble,
} from "../Number/ArrayLib";

export default function CubeTimerController(props) {
  const [listOfTimes, setListOfTimes] = useState(
    props.initialTimes ? props.initialTimes : []
  );
  const [actualScramble, setActualScramble] = useState(getRandomScramble());

  const handleNewTime = (time) => {
    var newTime = {
      time: time,
      timestamp: Date.now(),
      plus2: false,
      dnf: false,
      scramble: actualScramble,
    };
    setListOfTimes((listOfTimes) => [...listOfTimes, newTime]);
    setActualScramble(getRandomScramble());

    if (props.addTime) {
      props.addTime(newTime);
    }
  };

  const handleDeleteTime = (time) => {
    if (listOfTimes.includes(time)) {
      var tmpList = listOfTimes.filter((aTime) => aTime !== time);
      setListOfTimes(tmpList);

      if (props.deleteTime) {
        props.deleteTime(time);
      } else {
        localStorage.setItem("times", JSON.stringify(tmpList));
      }
    }
  };

  const handleDeleteAllTimes = () => {
    setListOfTimes([]);
    if (props.deleteAll) {
      props.deleteAll();
    } else {
      localStorage.setItem("times", JSON.stringify([]));
    }
  };

  const handlePlus2 = (time) => {
    if (listOfTimes.includes(time)) {
      var tmpList = listOfTimes.map((aTime) => {
        if (aTime === time) {
          aTime.plus2 = !aTime.plus2;
        }
        return aTime;
      });

      setListOfTimes(tmpList);

      if (props.plus2) {
        props.plus2(time);
      }
    }
  };

  const handleDNF = (time) => {
    if (listOfTimes.includes(time)) {
      var tmpList = listOfTimes.map((aTime) => {
        if (aTime === time) {
          aTime.dnf = !aTime.dnf;
        }
        return aTime;
      });

      setListOfTimes(tmpList);

      if (props.dnf) {
        props.dnf(time);
      }
    }
  };

  return (
    <>
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <TimeCard
            playerName={props.playerName}
            keyValue={props.keyValue}
            keyName={props.keyName}
            notifyNewTime={handleNewTime}
          />
        </div>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            display: "flex",
            marginTop: "1vh",
          }}
        >
          {props.mode === 0 && (
            <PracticeBarCard
              scramble={actualScramble}
              pb={getPB(listOfTimes)}
              media={getMedia(listOfTimes)}
              avg5={getCurrAvg(5, listOfTimes)}
              avg12={getCurrAvg(12, listOfTimes)}
              avg50={getCurrAvg(50, listOfTimes)}
              avg100={getCurrAvg(100, listOfTimes)}
              deleteAll={handleDeleteAllTimes}
            />
          )}
        </div>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            display: "flex",
            marginTop: "1vh",
          }}
        >
          <ListCard
            listOfTimes={listOfTimes}
            deleteTime={handleDeleteTime}
            plus2={handlePlus2}
            dnf={handleDNF}
          />
        </div>
      </div>
    </>
  );
}
