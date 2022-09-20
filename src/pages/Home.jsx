import { DashboardLayout } from "../components/sidebar/LeftSidebar/LeftSideLayout";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <h2>{t("homePage")}</h2>
    </DashboardLayout>
  );
};

export default HomePage;
