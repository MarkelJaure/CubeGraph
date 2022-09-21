import { DashboardLayout } from "../components/sidebar/LeftSidebar/LeftSideLayout";
import { useTranslation } from "react-i18next";
import BodyWrapper from "../components/sidebar/BodyWrapper";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <BodyWrapper>
        <h2>{t("homePage")}</h2>
      </BodyWrapper>
    </DashboardLayout>
  );
};

export default HomePage;
