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

import LocaleContext from "../../../contexts/LocaleContext";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useEffect } from "react";
import ThemeContext from "../../../contexts/ThemeContext";

export const NavSidebar = () => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

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
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-${theme} border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex justify-center mt-10">
          <img
            src="cube.png"
            alt="CubrGraph icon"
            width="128"
            height="128"
          ></img>
        </div>
        <div className="flex items-center justify-center  text-center py-6">
          <span className={`mx-2 text-2xl font-semibold tx-p-${theme}`}>
            CubeGraph
          </span>
        </div>

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          className={`${theme}`}
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            // {
            //   title: "Home",
            //   itemId: "/",
            //   // Optional
            // },
            // {
            //   title: "Graphics",
            //   itemId: "/graphics",
            //   // Optional
            // },
            // {
            //   title: "About",
            //   itemId: "/about",
            //   // Optional
            // },
            {
              title: t("Practice"),
              itemId: "/practice",
              elemBefore: () => <AppsIcon />,
              // Optional
            },
            {
              title: t("Competition"),
              itemId: "/competition",
              elemBefore: () => <EmojiEventsIcon />,
              // Optional
            },
          ]}
        />
        <div
          className="absolute bottom-0 w-full my-8"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <FormControl
            style={{
              width: "90%",
            }}
          >
            <InputLabel>{t("Language")}</InputLabel>
            <Select
              value={languageSelected}
              label={t("Language")}
              onChange={handleChangeLenguaje}
            >
              <MenuItem value={"en"}>
                {getUnicodeFlagIcon("US") + " " + t("English")}
              </MenuItem>
              <MenuItem value={"es"}>
                {getUnicodeFlagIcon("AR") + " " + t("Spanish")}
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </React.Fragment>
  );
};
