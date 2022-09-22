import React, { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import AppBar from "@mui/material/AppBar";
import { getListWithoutDNFs } from "../../lib/ArrayTimesUtil";
import ProgressGraphic from "./ProgressGraphic";
import Box from "@mui/material/Box";
import ListOfTimeContext from "../../../contexts/ListOfTimesContext";

const ProgressModal = (props) => {
  const { listOfTimes } = useContext(ListOfTimeContext);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box
            sx={{
              bgcolor: "background.paper",
              width: props.width + 50,
              height: props.height,
            }}
            style={style.modal}
          >
            <ProgressGraphic
              listOfTimes={getListWithoutDNFs(listOfTimes)}
              width={props.width}
              height={props.height}
              playerName={props.playerName}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

const style = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  },
};

export default ProgressModal;
