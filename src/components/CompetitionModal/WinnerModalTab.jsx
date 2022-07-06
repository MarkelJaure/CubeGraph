import { Typography } from "@mui/material";

const WinnerModalTab = (props) => {
  return (
    <div
      style={{
        marginTop: "10%",
        justifyContent: "center",
      }}
    >
      <Typography
        component="div"
        sx={{ fontSize: 18, display: "flex", justifyContent: "center" }}
      >
        El ganador es:
      </Typography>
      <Typography
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
          : " - "}
        !
      </Typography>
    </div>
  );
};

export default WinnerModalTab;
