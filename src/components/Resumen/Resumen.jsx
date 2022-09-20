import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import StatsComparationCard from "./StatsComparationCard";
import TimesComparationCard from "./TimesComparationCard";
import CompetitionModal from "../modals/CompetitionModal/CompetitionModal";
import { getListWithoutDNFs } from "../lib/ArrayTimesUtil";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@mui/material";

const Resumen = (props) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const checkButtonDisabled = () => {
    if (!props.timesPlayer1 || !props.timesPlayer2) {
      return true;
    }
    if (
      getListWithoutDNFs(props.timesPlayer1).length === 0 ||
      getListWithoutDNFs(props.timesPlayer2).length === 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <div style={styles.flexContainer}>
      <div style={styles.flexComponent}>
        <StatsComparationCard
          timesPlayer1={props.timesPlayer1}
          timesPlayer2={props.timesPlayer2}
          playerName1={props.playerName1}
          playerName2={props.playerName2}
          updateInTimesPlayer1={props.updateInTimesPlayer1}
          updateInTimesPlayer2={props.updateInTimesPlayer2}
        />
      </div>
      <div style={styles.flexComponent}>
        <TimesComparationCard
          timesPlayer1={props.timesPlayer1}
          timesPlayer2={props.timesPlayer2}
          playerName1={props.playerName1}
          playerName2={props.playerName2}
        />
      </div>

      <div style={styles.flexComponent}>
        <Tooltip title={t("FinalizeMatchTooltip")} placement="bottom">
          <Button
            variant="contained"
            onClick={handleOpen}
            style={styles.finalizeButton}
            disabled={checkButtonDisabled()}
          >
            {t("Finalize Match")}
          </Button>
        </Tooltip>
        <CompetitionModal
          open={isModalOpen}
          onClose={handleClose}
          timesPlayer1={props.timesPlayer1}
          timesPlayer2={props.timesPlayer2}
          playerName1={props.playerName1}
          playerName2={props.playerName2}
          height={260}
          width={550}
          updateInTimesPlayer1={props.updateInTimesPlayer1}
          updateInTimesPlayer2={props.updateInTimesPlayer2}
        />
      </div>
    </div>
  );
};

const styles = {
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  flexComponent: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
    marginTop: "2vh",
  },
  finalizeButton: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2vh",
  },
};

export default Resumen;
