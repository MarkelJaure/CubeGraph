import { DashboardLayout } from "../components/navBar/Layout";
import TimeController from "../components/timeController/timeController";
import React from "react";
import { useState, useEffect } from "react";
import Resumen from "../components/resumen/Resumen";

const KEY_PLAYER_1 = 32;
const KEY_PLAYER_2 = 96;

const CompetitionPage = () => {
  return (
    <DashboardLayout>
      <div style={styles.container}>
        <div style={styles.div}>
          <div style={styles.div2}>
            <TimeController keyValue={KEY_PLAYER_1} playerName={1} />
          </div>
        </div>
        <div style={styles.div}>
          <div style={styles.div2}>
            <Resumen />
          </div>
        </div>
        <div style={styles.div}>
          <div style={styles.div2}>
            <TimeController keyValue={KEY_PLAYER_2} playerName={2} />
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
