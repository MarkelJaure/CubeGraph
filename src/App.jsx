import React, { Suspense, useState } from "react";
import Loading from "./components/lib/Loading";
import Routes from "./Routes";
import i18n from "./i18n";
import LocaleContext from "./contexts/LocaleContext";
import ThemeContext from "./contexts/ThemeContext";
import { createTheme, ThemeProvider } from "@mui/material";
import { DARK, LIGHT } from "./components/lib/Constants";

const App = () => {
  const [locale, setLocale] = useState(i18n.language);

  const previusTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState(
    previusTheme ? JSON.parse(previusTheme) : LIGHT
  );

  const changeTheme = () => {
    var newTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Suspense fallback={<Loading />}>
          <ThemeProvider
            theme={createTheme({
              palette: {
                mode: theme,
              },
            })}
          >
            <Routes />
          </ThemeProvider>
        </Suspense>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
};

export default App;
