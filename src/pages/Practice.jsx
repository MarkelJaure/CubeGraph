import { DashboardLayout } from "../components/navBar/Layout";
import { RightDashboardLayout } from "../components/rightSidebar/Layout";
import React, { useState, useEffect } from "react";
import CubeTimerController from "../components/TimeController/CubeTimerController";
import { PRACTICE_MODE } from "../components/lib/Constants";

import {
  getPB,
  getMedia,
  getBestAvg,
  getCurrAvg,
} from "../components/lib/ArrayTimesUtil";

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
              mode={PRACTICE_MODE}
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
        <RightDashboardLayout
          actualAvg5={getCurrAvg(5, listOfTimes)}
          bestAvg5={getBestAvg(5, listOfTimes)}
          animateAvg5={true}
          actualAvg12={getCurrAvg(12, listOfTimes)}
          bestAvg12={getBestAvg(12, listOfTimes)}
          animateAvg12={animateBestAvg(12, listOfTimes, true)}
          actualAvg50={getCurrAvg(50, listOfTimes)}
          bestAvg50={getBestAvg(50, listOfTimes)}
          animateAvg50={animateBestAvg(50, listOfTimes, true)}
          actualAvg100={getCurrAvg(100, listOfTimes)}
          bestAvg100={getBestAvg(100, listOfTimes)}
          animateAvg100={animateBestAvg(100, listOfTimes, true)}
          pb={getPB(listOfTimes)}
          media={getMedia(listOfTimes)}
          animatePb={true}
          animateMedia={true}
        ></RightDashboardLayout>
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

function animateBestAvg(aNumber, listOfTimes, timerPlayer) {
  return (
    getCurrAvg(aNumber, listOfTimes) <
      getBestAvg(aNumber, listOfTimes.slice(0, listOfTimes.length - 1)) &&
    !timerPlayer
  );
}

export default PracticePage;
