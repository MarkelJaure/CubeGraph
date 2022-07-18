import { Typography } from "@mui/material";
import "./styles.css";
import { useTranslation } from "react-i18next";

const WinnerModalTab = (props) => {
  const { t } = useTranslation();

  const IsPlayerWin = (aMedia1, aMedia2) => {
    if (!aMedia1) return false;
    if (!aMedia2) return true;
    if (aMedia1 === -1) return false;
    if (aMedia2 === -1) return true;
    return aMedia1 < aMedia2;
  };

  return (
    <>
      <div
        style={{
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <Typography
          component="div"
          sx={{ fontSize: 18, display: "flex", justifyContent: "center" }}
        >
          {t("The winner is")}:
        </Typography>
        <Typography
          className="fade-in-text"
          variant="h5"
          component="div"
          sx={{ fontSize: 40, display: "flex", justifyContent: "center" }}
        >
          {IsPlayerWin(props.mediaPlayer1, props.mediaPlayer2)
            ? props.playerName1
            : IsPlayerWin(props.mediaPlayer2, props.mediaPlayer1)
            ? props.playerName2
            : t("Draw")}
          !
        </Typography>
      </div>
      <div className="pyro" style={{ paddingBottom: 120 }}>
        <div className="before"></div>
        <div className="after"></div>
      </div>
    </>
  );
};

export default WinnerModalTab;
