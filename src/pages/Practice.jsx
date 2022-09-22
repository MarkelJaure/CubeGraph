import { DashboardLayout } from "../components/sidebar/LeftSidebar/LeftSideLayout";
import { RightDashboardLayout } from "../components/sidebar/RightSidebar/RighSideLayout";
import React, { useState, useEffect } from "react";
import CubeTimerController from "../components/speedCubeTimes/CubeTimerController";
import { PRACTICE_MODE } from "../components/lib/Constants";
import ListOfTimeContext from "../contexts/ListOfTimesContext";

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
      localStorage.setItem("times", JSON.stringify(tmpList));
    }
  };

  const handlePlus2Time = (time) => {
    var tmpList = listOfTimes.map((aTime) => {
      if (aTime === time) {
        aTime.plus2 = !aTime.plus2;
      }
      return aTime;
    });

    setListOfTimes(tmpList);

    localStorage.setItem("times", JSON.stringify(listOfTimes));
  };

  const handleDNFTime = (time) => {
    var tmpList = listOfTimes.map((aTime) => {
      if (aTime === time) {
        aTime.dnf = !aTime.dnf;
      }
      return aTime;
    });

    setListOfTimes(tmpList);

    localStorage.setItem("times", JSON.stringify(listOfTimes));
  };

  const handleDeleteAllTimes = () => {
    setListOfTimes([]);
    localStorage.setItem("times", JSON.stringify([]));
  };

  return (
    <DashboardLayout>
      <ListOfTimeContext.Provider
        value={{
          listOfTimes,
          handleAddTime,
          handleDeleteTime,
          handlePlus2Time,
          handleDNFTime,
          handleDeleteAllTimes,
        }}
      >
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
          <RightDashboardLayout></RightDashboardLayout>
        </div>
      </ListOfTimeContext.Provider>
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

// function animateBestAvg(aNumber, listOfTimes, timerPlayer) {
//   return (
//     getCurrAvg(aNumber, listOfTimes) <
//       getBestAvg(aNumber, listOfTimes.slice(0, listOfTimes.length - 1)) &&
//     !timerPlayer
//   );
// }

export default PracticePage;
