import { Typography } from "@mui/material";

const WinnerModalTab = (props) => {
  return (
    <>
      <Typography
        component="div"
        sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
      >
        El ganador es:
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{ display: "flex", justifyContent: "center" }}
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
    </>
  );
};

export default WinnerModalTab;
