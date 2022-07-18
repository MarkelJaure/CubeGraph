import { DashboardLayout } from "../components/navBar/Layout";
import React, { useState, useEffect } from "react";
import CubeTimerController from "../components/TimeController/CubeTimerController";

const KEY_PLAYER = 32;
const KEY_NAME = "Space";
const NAME_PLAYER = "Player 1";

const PracticePage = () => {
  const previusTimes = localStorage.getItem("times");

  const [listOfTimes, setListOfTimes] = useState(
    previusTimes ? JSON.parse(previusTimes) : []
  );

  const handleAddTime = (time) => {
    localStorage.setItem("times", JSON.stringify([...listOfTimes, time]));
    setListOfTimes((listOfTimes) => [...listOfTimes, time]);
  };

  const handleDeleteTime = (time) => {
    if (listOfTimes.includes(time)) {
      var tmpList = listOfTimes.filter((aTime) => aTime !== time);
      setListOfTimes(tmpList);
    }
    localStorage.setItem("times", JSON.stringify(tmpList));
  };

  const handlePlus2Time = (time) => {
    listOfTimes.forEach((aTime) => {
      if (aTime.timestamp === time.timestamp) {
        aTime = time;
      }
    });
    localStorage.setItem("times", JSON.stringify(listOfTimes));
  };

  const handleDNFTime = (time) => {
    listOfTimes.forEach((aTime) => {
      if (aTime.timestamp === time.timestamp) {
        aTime = time;
      }
    });
    localStorage.setItem("times", JSON.stringify(listOfTimes));
  };

  const handleDeleteAllTimes = () => {
    localStorage.setItem("times", JSON.stringify([]));
  };

  return (
    <DashboardLayout>
      <div style={styles.container}>
        <div style={styles.div}>
          <div style={styles.div2}>
            <CubeTimerController
              mode={0}
              keyValue={KEY_PLAYER}
              playerName={NAME_PLAYER}
              keyName={KEY_NAME}
              initialTimes={listOfTimes}
              addTime={handleAddTime}
              deleteTime={handleDeleteTime}
              plus2={handlePlus2Time}
              dnf={handleDNFTime}
              deleteAll={handleDeleteAllTimes}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  div: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    width: 9 / 10,
  },
  div2: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
};

export default PracticePage;
