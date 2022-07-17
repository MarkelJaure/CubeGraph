import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TimesComparationTable from "./TimesComparationTable";
import { useTranslation } from "react-i18next";

const TimesComparationCard = (props) => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        width: 9 / 10,
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2vh",
      }}
    >
      <CardContent sx={{ width: 1 }}>
        <Typography
          sx={{ fontSize: 14, display: "flex", justifyContent: "center" }}
          color="text.secondary"
          gutterBottom
        >
          {t("Times")}
        </Typography>
        <Typography variant="h5" component="div">
          <TimesComparationTable
            timesPlayer1={props.timesPlayer1}
            timesPlayer2={props.timesPlayer2}
            playerName1={props.playerName1}
            playerName2={props.playerName2}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TimesComparationCard;
