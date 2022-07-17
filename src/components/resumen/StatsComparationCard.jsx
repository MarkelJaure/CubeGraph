import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StatsComparationTable from "./StatsComparationTable";
import { getMedia, getPB } from "../Number/ArrayLib";
import { useTranslation } from "react-i18next";

const StatsComparationCard = (props) => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        width: 9 / 10,
        height: 170,
      }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ width: 1 }}>
        <Typography
          sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
          color="text.secondary"
          gutterBottom
        >
          {t("Comparation")}
        </Typography>
        <Typography variant="h5" component="div">
          <StatsComparationTable
            pbPlayer1={getPB(props.timesPlayer1)}
            pbPlayer2={getPB(props.timesPlayer2)}
            mediaPlayer1={getMedia(props.timesPlayer1)}
            mediaPlayer2={getMedia(props.timesPlayer2)}
            playerName1={props.playerName1}
            playerName2={props.playerName2}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatsComparationCard;
