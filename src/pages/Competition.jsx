import { DashboardLayout } from "../components/navBar/Layout";
import React from "react";
import { useState, useEffect } from "react";
import Resumen from "../components/Resumen/Resumen";
import CubeTimerController from "../components/TimeController/CubeTimerController";
import { COMPETITION_MODE } from "../components/lib/Constants";

const KEY_PLAYER_1 = 32;
const NAME_PLAYER_1 = "Player 1";
const KEY_NAME_1 = "Space";

const KEY_PLAYER_2 = 96;
const NAME_PLAYER_2 = "Player 2";
const KEY_NAME_2 = "Num 0";

const CompetitionPage = () => {
  const [timesPlayer1, setTimesPlayer1] = useState([]);
  const [timesPlayer2, setTimesPlayer2] = useState([]);
  const [updateInTimesPlayer1, setUpdateInTimesPlayer1] = useState(false);
  const [updateInTimesPlayer2, setUpdateInTimesPlayer2] = useState(false);

  const handleAddTimePlayer1 = (time) => {
    setTimesPlayer1((timesPlayer1) => [...timesPlayer1, time]);
  };

  const handleDeleteTimePlayer1 = (time) => {
    if (timesPlayer1.includes(time)) {
      var tmpList = timesPlayer1.filter((aTime) => aTime !== time);
      setTimesPlayer1(tmpList);
    }
  };

  const handleAddTimePlayer2 = (time) => {
    setTimesPlayer2((timesPlayer2) => [...timesPlayer2, time]);
  };

  const handleDeleteTimePlayer2 = (time) => {
    if (timesPlayer2.includes(time)) {
      var tmpList = timesPlayer2.filter((aTime) => aTime !== time);
      setTimesPlayer2(tmpList);
    }
  };
  const handlePlus2TimePlayer1 = (time) => {
    setUpdateInTimesPlayer1(!updateInTimesPlayer1);
    var tmpList = timesPlayer1;
    tmpList.forEach((aTime) => {
      if (aTime.timestamp === time.timestamp) {
        aTime = time;
      }
    });
    setTimesPlayer1(tmpList);
  };

  const handleDNFTimePlayer1 = (time) => {
    setUpdateInTimesPlayer1(!updateInTimesPlayer1);
  };
  const handlePlus2TimePlayer2 = (time) => {
    setUpdateInTimesPlayer2(!updateInTimesPlayer2);
  };

  const handleDNFTimePlayer2 = (time) => {
    setUpdateInTimesPlayer2(!updateInTimesPlayer2);
  };

  return (
    <DashboardLayout>
      <div style={styles.container}>
        <div style={styles.div}>
          <div style={styles.div2}>
            <CubeTimerController
              mode={COMPETITION_MODE}
              keyValue={KEY_PLAYER_1}
              keyName={KEY_NAME_1}
              playerName={NAME_PLAYER_1}
              addTime={handleAddTimePlayer1}
              deleteTime={handleDeleteTimePlayer1}
              plus2={handlePlus2TimePlayer1}
              dnf={handleDNFTimePlayer1}
            />
          </div>
        </div>
        <div style={styles.div}>
          <div style={styles.div2}>
            <Resumen
              playerName1={NAME_PLAYER_1}
              playerName2={NAME_PLAYER_2}
              timesPlayer1={timesPlayer1}
              timesPlayer2={timesPlayer2}
              updateInTimesPlayer1={updateInTimesPlayer1}
              updateInTimesPlayer2={updateInTimesPlayer2}
            />
          </div>
        </div>
        <div style={styles.div}>
          <div style={styles.div2}>
            <CubeTimerController
              mode={COMPETITION_MODE}
              keyValue={KEY_PLAYER_2}
              keyName={KEY_NAME_2}
              playerName={NAME_PLAYER_2}
              addTime={handleAddTimePlayer2}
              deleteTime={handleDeleteTimePlayer2}
              plus2={handlePlus2TimePlayer2}
              dnf={handleDNFTimePlayer2}
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
    width: "100%",
    justifyContent: "center",
  },
};

export default CompetitionPage;
