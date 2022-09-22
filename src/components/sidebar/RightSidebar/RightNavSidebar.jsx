import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import LocaleContext from "../../../contexts/LocaleContext";

import {
  getBestAvg,
  getCurrAvg,
  getStandardDeviation,
  getMedia,
  getPB,
} from "../../lib/ArrayTimesUtil";
import ActualAndBestAvgs from "./ActualAndBestAvgs";
import { Button, Tooltip } from "@mui/material";
import ProgressModal from "../../modals/ProgressModal/ProgressModal";
import TimelineIcon from "@mui/icons-material/Timeline";
import { getListWithoutDNFs } from "../../lib/ArrayTimesUtil";
import ListOfTimeContext from "../../../contexts/ListOfTimesContext";

export const RightSidebar = (props) => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  const { listOfTimes } = useContext(ListOfTimeContext);
  var actualAvg5 = getCurrAvg(5, listOfTimes);
  var bestAvg5 = getBestAvg(5, listOfTimes);
  var actualAvg12 = getCurrAvg(12, listOfTimes);
  var bestAvg12 = getBestAvg(12, listOfTimes);
  var actualAvg50 = getCurrAvg(50, listOfTimes);
  var bestAvg50 = getBestAvg(50, listOfTimes);
  var actualAvg100 = getCurrAvg(100, listOfTimes);
  var bestAvg100 = getBestAvg(100, listOfTimes);
  var pb = getPB(listOfTimes);
  var media = getMedia(listOfTimes);
  var ed = getStandardDeviation(listOfTimes);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const checkDisabledGraphicButton = () => {
    if (!listOfTimes) {
      return true;
    }
    if (getListWithoutDNFs(listOfTimes).length === 0) {
      return true;
    }
    return false;
  };

  return (
    <React.Fragment>
      {/* Sidebar */}
      <div className={`overflow-y-auto bg-white`} style={{ width: 350 }}>
        <div
          className="my-8 "
          style={{
            display: "flex",
            width: "90%",
            margin: "auto",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              alignSelf: "center",
              marginTop: "2vh",
            }}
          >
            <ActualAndBestAvgs
              actualAvg5={actualAvg5}
              bestAvg5={bestAvg5}
              animateAvg5={true}
              actualAvg12={actualAvg12}
              bestAvg12={bestAvg12}
              animateAvg12={true}
              actualAvg50={actualAvg50}
              bestAvg50={bestAvg50}
              animateAvg50={true}
              actualAvg100={actualAvg100}
              bestAvg100={bestAvg100}
              animateAvg100={true}
              pb={pb}
              animatePb={true}
              media={media}
              animateMedia={true}
              ed={ed}
            />
          </div>
          <div
            style={{
              alignSelf: "center",
              marginTop: "2vh",
            }}
          >
            <Tooltip title={t("PracticeGraphTooltip")} placement="bottom">
              <Button
                width={"7%"}
                align="center"
                variant="contained"
                style={{ minWidth: "40px" }}
                onClick={handleOpen}
                disabled={checkDisabledGraphicButton()}
              >
                {t("PracticeGraphTooltip")} <TimelineIcon />
              </Button>
            </Tooltip>

            <ProgressModal
              open={isModalOpen}
              onClose={handleClose}
              playerName={props.playerName}
              height={260}
              width={550}
              updateInTimesPlayer={props.updateInTimesPlayer}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
