import { Typography } from "@mui/material";
import "./styles.css";

const WinnerModalTab = (props) => {
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
          El ganador es:
        </Typography>
        <Typography
          className="fade-in-text"
          variant="h5"
          component="div"
          sx={{ fontSize: 40, display: "flex", justifyContent: "center" }}
        >
          {props.mediaPlayer1 && props.mediaPlayer2
            ? props.mediaPlayer1 <= props.mediaPlayer2
              ? props.mediaPlayer1 < props.mediaPlayer2
                ? props.playerName1
                : "Empate"
              : props.playerName2
            : " Nadie "}
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
