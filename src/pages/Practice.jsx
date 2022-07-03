import { DashboardLayout } from "../components/navBar/Layout";
import React, { useState, useEffect } from "react";
import CubeTimerController from "../components/timeController/CubeTimerController";
const KEY_PLAYER = 32;

const PracticePage = () => {
  return (
    <DashboardLayout>
      <div style={styles.container}>
        <div style={styles.div}>
          <div style={styles.div2}>
            <CubeTimerController keyValue={KEY_PLAYER} playerName={1} />
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

export default PracticePage;
