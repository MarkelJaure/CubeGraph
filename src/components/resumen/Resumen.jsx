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
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const Resumen = (props) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

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
       onClick={handleOpen}
        style={{  display: "flex", justifyContent: "center", margin: 10 }}
      >
        Finalizar partida
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={style.modal}>
            <Typography id="transition-modal-title" variant="h6" component="h2" align="center">
              Finalizacion de partida
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} align="center">
              Esto es la finalizacion de la partida
            </Typography>
          </Box>
        </Fade>
      </Modal>
      </div>
    </>
  );
};

const style = {
  modal:{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,}
};

export default Resumen;
