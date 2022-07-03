import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DisplayTime from "../Number/DisplayTime";
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Icon from "awesome-react-icons";
import StatsComparationCard from "./StatsComparationCard";
import TimesComparationCard from "./TimesComparationCard";

const Resumen = (props) => {
  return (
    <>
      <StatsComparationCard
        timesPlayer1={props.timesPlayer1}
        timesPlayer2={props.timesPlayer2}
        playerName1={props.playerName1}
        playerName2={props.playerName2}
      />

      <TimesComparationCard
        timesPlayer1={props.timesPlayer1}
        timesPlayer2={props.timesPlayer2}
        playerName1={props.playerName1}
        playerName2={props.playerName2}
      />
      <div style={{  display: "flex", justifyContent: "center" }}>
      <Button
       variant="contained"
        style={{  display: "flex", justifyContent: "center", margin: 10 }}
      >
        Finalizar partida
      </Button>
      </div>
    </>
  );
};

export default Resumen;
