import React, { Suspense, useState } from "react";
import Loading from "./components/lib/Loading";
import Routes from "./Routes";
import i18n from "./i18n";
import LocaleContext from "./contexts/LocaleContext";
import ThemeContext from "./contexts/ThemeContext";
import { createTheme, ThemeProvider } from "@mui/material";

const App = () => {
  const [locale, setLocale] = useState(i18n.language);
  const [theme, setTheme] = useState("dark");

  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
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
