import { DashboardLayout } from "../components/navBar/Layout";
import TimeController from "../components/timeController/timeController";
import React from "react";
import { useState, useEffect } from "react";

const KEY_PLAYER_1 = 32;
const KEY_PLAYER_2 = 96;

const CompetitionPage = () => {
  return (
    <div>
      <DashboardLayout>
        <div
          style={{
            display: "inline-block",
            marginLeft: "20%",
            marginRight: "10%",
            position: "relative",
          }}
        >
          <TimeController keyValue={KEY_PLAYER_1} playerName={1} />
        </div>
        <div
          style={{
            display: "inline-block",
            marginRight: "1fr",
            position: "relative",
          }}
        >
          <TimeController keyValue={KEY_PLAYER_2} playerName={2} />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default CompetitionPage;
