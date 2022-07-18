import React, { Suspense, useState } from "react";
import Loading from "./components/Loading/Loading";
import Routes from "./Routes";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";

const App = () => {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </LocaleContext.Provider>
  );
};

export default App;
