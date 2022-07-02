import { DashboardLayout } from "../components/navBar/Layout";
import TimeController from "../components/timeController/timeController";
import React from "react";
import { useState, useEffect } from "react";
import Resumen from "../components/resumen/Resumen";

const KEY_PLAYER_1 = 32;
const KEY_PLAYER_2 = 96;

const CompetitionPage = () => {
  const [timesPlayer1, setTimesPlayer1] = useState([]);
  const [timesPlayer2, setTimesPlayer2] = useState([]);

  const changeOnTimesPlayer1 = (listOfTimes) => {
    setTimesPlayer1(listOfTimes);
    console.log("Cambio de array");
  };

  const changeOnTimesPlayer2 = (listOfTimes) => {
    setTimesPlayer2(listOfTimes);
  };

  return (
    <DashboardLayout>
      <div style={styles.container}>
        <div style={styles.div}>
          <div style={styles.div2}>
            <TimeController
              keyValue={KEY_PLAYER_1}
              playerName={1}
              notifyChangeOnTimes={changeOnTimesPlayer1}
            />
          </div>
        </div>
        <div style={styles.div}>
          <div style={styles.div2}>
            <Resumen
              playerName1={1}
              playerName2={2}
              timesPlayer1={timesPlayer1}
              timesPlayer2={timesPlayer2}
            />
          </div>
        </div>
        <div style={styles.div}>
          <div style={styles.div2}>
            <TimeController
              keyValue={KEY_PLAYER_2}
              playerName={2}
              notifyChangeOnTimes={changeOnTimesPlayer2}
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
