import { DashboardLayout } from "../components/navBar/Layout";
import TimeController from "../components/timeController/timeController";
import React, { useState, useEffect } from "react";

const KEY_PLAYER = 32;

const PracticePage = () => {
  return (
    <DashboardLayout>
      <div
        style={{
          display: "inline-block",
          justifyContent: "center",
          position: "absolute",
          marginLeft: "30%",
        }}
      >
        <TimeController keyValue={KEY_PLAYER} playerName={1} />
      </div>
    </DashboardLayout>
  );
};

export default PracticePage;
