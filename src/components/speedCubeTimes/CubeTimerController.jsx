import React, { useState, useEffect, useContext } from "react";
import TimeCard from "./TimeController/TimeCard";
import ListCard from "./ListTimeController/ListCard";
import PracticeBarCard from "./PracticeBar/PracticeBarCard";
import { getCurrAvg, getMedia, getPB } from "../lib/ArrayTimesUtil";
import { comparationOfTime, getRandomScramble } from "../lib/SingleTimeUtil";
import { PRACTICE_MODE } from "../lib/Constants";
import ListOfTimeContext from "../../contexts/ListOfTimesContext";

export default function CubeTimerController(props) {
  const { listOfTimes, handleAddTime } = useContext(ListOfTimeContext);

  const [actualScramble, setActualScramble] = useState(getRandomScramble());

  const handleNewTime = (time) => {
    var newTime = {
      time: time,
      timestamp: Date.now(),
      plus2: false,
      dnf: false,
      scramble: actualScramble,
    };
    handleAddTime(newTime);

    setActualScramble(getRandomScramble());
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
            />
          )}
        </div>
        <div style={styles.flexComponent}>
          <ListCard mode={props.mode} />
        </div>
      </div>
    </>
  );
}

const styles = {
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "start",
    display: "flex",
    flexDirection: "column",
  },
  flexComponent: {
    justifyContent: "center",
    display: "flex",
    marginTop: "1vh",
  },
};
