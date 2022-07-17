import React, { Suspense } from "react";
import Loading from "./components/Loading/Loading";
import Routes from "./Routes";
import i18n from "./i18n";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes />
    </Suspense>
  );
};

export default App;
