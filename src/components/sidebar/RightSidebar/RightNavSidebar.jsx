/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import AppsIcon from "@mui/icons-material/Apps";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import LocaleContext from "../../../LocaleContext";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { US, AR } from "country-flag-icons/react/3x2";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useEffect } from "react";

import { getBestAvg, getCurrAvg } from "../../lib/ArrayTimesUtil";
import ActualAndBestAvgs from "./ActualAndBestAvgs";
import { Button, Tooltip } from "@mui/material";
import ProgressModal from "../../modals/ProgressModal/ProgressModal";
import TimelineIcon from "@mui/icons-material/Timeline";
import { getListWithoutDNFs } from "../../lib/ArrayTimesUtil";

export const RightSidebar = (props) => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const checkDisabledGraphicButton = () => {
    if (!props.listOfTimes) {
      return true;
    }
    if (getListWithoutDNFs(props.listOfTimes).length === 0) {
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
              actualAvg5={props.actualAvg5}
              bestAvg5={props.bestAvg5}
              animateAvg5={props.animateAvg5}
              actualAvg12={props.actualAvg12}
              bestAvg12={props.bestAvg12}
              animateAvg12={props.animateAvg12}
              actualAvg50={props.actualAvg50}
              bestAvg50={props.bestAvg50}
              animateAvg50={props.animateAvg50}
              actualAvg100={props.actualAvg100}
              bestAvg100={props.bestAvg100}
              animateAvg100={props.animateAvg100}
              pb={props.pb}
              animatePb={props.animatePb}
              media={props.media}
              animateMedia={props.animateMedia}
              ed={props.ed}
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
              listOfTimes={props.listOfTimes}
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
