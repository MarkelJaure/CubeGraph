import React, { useState, useEffect } from "react";
import TimeCard from "./TimeCard";
import ListCard from "./ListCard";
import PracticeBarCard from "./PracticeBarCard";
import { getCurrAvg, getMedia, getPB } from "../lib/ArrayTimesUtil";
import { comparationOfTime, getRandomScramble } from "../lib/SingleTimeUtil";
import { PRACTICE_MODE } from "../lib/Constants";

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
      <div style={styles.flexContainer}>
        <div style={styles.flexComponent}>
          <TimeCard
            playerName={props.playerName}
            keyValue={props.keyValue}
            keyName={props.keyName}
            notifyNewTime={handleNewTime}
            listOfTimes={listOfTimes}
            mode={props.mode}
          />
        </div>
        <div style={styles.flexComponent}>
          {props.mode === PRACTICE_MODE && (
            <PracticeBarCard
              scramble={actualScramble}
              pb={getPB(listOfTimes)}
              animatePb={
                comparationOfTime(
                  getPB(listOfTimes),
                  getPB(listOfTimes.slice(0, listOfTimes.length - 1))
                ) === 1
              }
              media={getMedia(listOfTimes)}
              avg5={getCurrAvg(5, listOfTimes)}
              avg12={getCurrAvg(12, listOfTimes)}
              avg50={getCurrAvg(50, listOfTimes)}
              avg100={getCurrAvg(100, listOfTimes)}
              deleteAll={handleDeleteAllTimes}
              listOfTimes={listOfTimes}
            />
          )}
        </div>
        <div style={styles.flexComponent}>
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

const styles = {
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  flexComponent: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
    marginTop: "1vh",
  },
};
