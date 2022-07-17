import { DashboardLayout } from "../components/navBar/Layout";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  console.log("Home");
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <h2>{t("homePage")}</h2>
    </DashboardLayout>
  );
};

export default HomePage;
