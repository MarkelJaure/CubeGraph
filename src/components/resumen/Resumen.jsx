import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import StatsComparationCard from "./StatsComparationCard";
import TimesComparationCard from "./TimesComparationCard";
import CompetitionModal from "./CompetitionModal";

const Resumen = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <StatsComparationCard
        timesPlayer1={props.timesPlayer1}
        timesPlayer2={props.timesPlayer2}
        playerName1={props.playerName1}
        playerName2={props.playerName2}
      />

      <TimesComparationCard
        timesPlayer1={props.timesPlayer1}
        timesPlayer2={props.timesPlayer2}
        playerName1={props.playerName1}
        playerName2={props.playerName2}
      />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{ display: "flex", justifyContent: "center", margin: 10 }}
        >
          Finalize Match
        </Button>
        <CompetitionModal open={isModalOpen} onClose={handleClose} />
      </div>
    </>
  );
};

export default Resumen;
