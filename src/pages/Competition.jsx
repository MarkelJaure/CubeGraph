import { DashboardLayout } from "../components/navBar/Layout";
import React from "react";
import { useState, useEffect } from "react";
import Resumen from "../components/resumen/Resumen";
import CubeTimerController from "../components/timeController/CubeTimerController";

const KEY_PLAYER_1 = 32;
const NAME_PLAYER_1 = 1;

const KEY_PLAYER_2 = 96;
const NAME_PLAYER_2 = 2;

const CompetitionPage = () => {
  const [timesPlayer1, setTimesPlayer1] = useState([]);
  const [timesPlayer2, setTimesPlayer2] = useState([]);

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

  return (
    <DashboardLayout>
      <div style={styles.container}>
        <div style={styles.div}>
          <div style={styles.div2}>
            <CubeTimerController
              keyValue={KEY_PLAYER_1}
              playerName={NAME_PLAYER_1}
              addTime={handleAddTimePlayer1}
              deleteTime={handleDeleteTimePlayer1}
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
            />
          </div>
        </div>
        <div style={styles.div}>
          <div style={styles.div2}>
            <CubeTimerController
              keyValue={KEY_PLAYER_2}
              playerName={NAME_PLAYER_2}
              addTime={handleAddTimePlayer2}
              deleteTime={handleDeleteTimePlayer2}
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
    display: "inline-grid",
    justifyContent: "center",
  },
  div2: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
};

export default CompetitionPage;
