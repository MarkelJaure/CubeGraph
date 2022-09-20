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

export const RightSidebar = (props) => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [languageSelected, setLanguageSelected] = useState(
    locale.substring(0, 2)
  );

  useEffect(() => {
    setLanguageSelected(locale.substring(0, 2));
    if (languageSelected !== "es" && languageSelected !== "en") {
      setLanguageSelected("en");
    }
  }, [locale]);

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  function handleChangeLenguaje(event) {
    changeLocale(event.target.value);
  }

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

            // bestAvg5={getBestAvg(5, props.listOfTimes)}
            // animateAvg5={animateBestAvg(5, props.listOfTimes, props.timerPlayer)}
            // bestAvg12={getBestAvg(12, props.listOfTimes)}
            // animateAvg12={animateBestAvg(
            //   12,
            //   props.listOfTimes,
            //   props.timerPlayer
            // )}
            // bestAvg50={getBestAvg(50, props.listOfTimes)}
            // animateAvg50={animateBestAvg(
            //   50,
            //   props.listOfTimes,
            //   props.timerPlayer
            // )}
            // bestAvg100={getBestAvg(100, props.listOfTimes)}
            // animateAvg100={animateBestAvg(
            //   100,
            //   props.listOfTimes,
            //   props.timerPlayer
            // )}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
